import { GetNotes, ReadNote } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow!')
}

try {

  contextBridge.exposeInMainWorld('context', {
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args)
  })
} catch (error) {
  console.error(error)
}
