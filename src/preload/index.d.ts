import { GetNotes, ReadNote } from '@shared/types'

declare global {
  interface Window {
    context: {
      platform: string
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
    }
  }
}

export {}
