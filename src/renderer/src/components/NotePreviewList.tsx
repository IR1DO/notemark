import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { twMerge } from 'tailwind-merge'
import Scrollbars from 'react-custom-scrollbars-2'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
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
        {notesMock.map((note) => (
          <NotePreview key={note.id} {...note} />
        ))}
      </ul>
    </Scrollbars>
  )
}
