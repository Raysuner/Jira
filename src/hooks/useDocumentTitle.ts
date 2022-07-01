import { useEffect } from 'react'

export function useDocumentTitle (title: string, keepLive = false) {

  const oldTitle = document.title
  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!keepLive) {
        document.title = oldTitle
      }
    }
  }, [keepLive, oldTitle])
}
