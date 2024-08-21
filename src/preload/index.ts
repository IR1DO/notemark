import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    platform: process.platform,
    locale: navigator.language
  })
} catch (error) {
  console.log(error)
}
