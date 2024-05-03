import { contextBridge } from 'electron'

// Custom APIs for renderer
if (process.contextIsolated) {
  throw new Error('contextIsolation myst be enabled in the BrowserWindow!')
}

try {

  contextBridge.exposeInMainWorld('conetext', {
    //TODO
  })
} catch (error) {
  console.error(error)
}
