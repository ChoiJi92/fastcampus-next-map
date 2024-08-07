import { RefObject, useEffect, useState } from 'react'

function useIntersectionObserver(elementRef: RefObject<Element>, { threshold = 0.1, root = null, rootMargin = '0%' }) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!node || !hasIOSupport) return

    const obserParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, obserParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef?.current, root, rootMargin, JSON.stringify(threshold)])
  return entry
}

export default useIntersectionObserver
