import { useEffect, useRef } from 'react'

export function useDocumentTitle (title: string, keepLive = false) {
  const oldTitleRef = useRef<string>(document.title)
  const oldTitle = oldTitleRef.current
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
