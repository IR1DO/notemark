declare global {
  interface Window {
    context: {
      platform: string
      locale: string
    }
  }
}

export {}
