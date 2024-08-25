import { NotePreview } from '@/components'
import { ComponentProps, forwardRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import Scrollbars from 'react-custom-scrollbars-2'
import { useNotesList } from '@renderer/hooks/useNotesList'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect: () => void
  scrollToNote: (id: string) => void
}

export const NotePreviewList = forwardRef<Scrollbars, NotePreviewListProps>(
  ({ onSelect, scrollToNote, className, ...props }, ref) => {
    const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

    useEffect(() => {
      if (selectedNoteIndex !== null) {
        scrollToNote(notes[selectedNoteIndex].id)
      }
    }, [selectedNoteIndex])

    if (notes.length === 0) {
      return (
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
          <ul className={twMerge('text-center pt-4', className)} {...props}>
            <span>No Notes Yet!</span>
          </ul>
        </Scrollbars>
      )
    }

    return (
      <Scrollbars ref={ref} autoHide autoHideTimeout={1000} autoHideDuration={500}>
        <ul className={className} {...props}>
          {notes.map((note, index) => (
            <NotePreview
              key={note.id}
              isActive={selectedNoteIndex === index}
              onClick={handleNoteSelect(index)}
              {...note}
            />
          ))}
        </ul>
      </Scrollbars>
    )
  }
)

NotePreviewList.displayName = 'NotePreviewList'
