import { useEffect, useRef } from 'react'

const useEndlessScroll = (childRef, callbackFromList) => {
  const observer = useRef()

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callbackFromList()
      }
    })

    if (childRef.current) {
      observer.current.observe(childRef.current)
    }

    return () => {
      if (childRef.current) {
        observer.current.unobserve(childRef.current)
      }
    }
  }, [callbackFromList])

  return observer
}

export default useEndlessScroll
