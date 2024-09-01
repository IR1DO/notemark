import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'
import { unwrap } from 'jotai/utils'

const loadNotes = async () => {
  const notes = await window.context.getNotes()

  // sort notes by least recently edited
  return notes.sort((a, b) => a.lastEditTime - b.lastEditTime)
}

const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const notesAtom = unwrap(notesAtomAsync, (prev) => prev)

export const selectedNoteIndexAtom = atom<number | null>(null)

const selectedNoteAtomAsync = atom(async (get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteIndexAtom)

  if (selectedNoteIndex === null || !notes) {
    return null
  }

  const selectedNote = notes[selectedNoteIndex]

  const noteContent = await window.context.readNote(selectedNote.title)

  return {
    ...selectedNote,
    content: noteContent
  }
})

export const selectedNoteAtom = unwrap(
  selectedNoteAtomAsync,
  (prev) =>
    prev ?? {
      id: uuidv4(),
      title: '',
      content: '',
      lastEditTime: Date.now()
    }
)

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)

  if (!notes) {
    return
  }

  const title = `Note ${notes.length}`

  const newNote: NoteInfo = {
    id: uuidv4(),
    title,
    lastEditTime: Date.now()
  }

  set(notesAtom, [...notes, newNote])

  set(selectedNoteIndexAtom, notes.length)
})

export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote || !notes) {
    return
  }

  set(
    notesAtom,
    notes.filter((note) => note.id !== selectedNote.id)
  )

  // don't have to return. just to pleasure the warning
  return set(selectedNoteIndexAtom, null)
})
