import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    context: {
      platform: string
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
      closeWindow: () => void
      minimizeWindow: () => void
      newWindow: () => void
    }
  }
}

export {}
