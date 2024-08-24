import { NotePreview } from '@/components'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import Scrollbars from 'react-custom-scrollbars-2'
import { useNotesList } from '@renderer/hooks/useNotesList'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

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
    <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
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
