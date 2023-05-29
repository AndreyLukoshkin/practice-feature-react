import { useEffect, useRef } from 'react'

const useEndlessScroll = (childRef, callbackFromList) => {
  const observer = useRef()

  useEffect(() => {
    const options = {
      root: null,
    }

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log(callbackFromList)
        callbackFromList()
      }
    }, options)

    observer.current.observe(childRef.current)
    return () => {
      observer.current.unobserve(childRef.current)
    }
  }, [callbackFromList])

  return observer
}

export default useEndlessScroll
