import { ElectronAPI } from '@electron-toolkit/preload'
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
    }
  }
}
