import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

const Hover = () => {
  const ref = useRef()
  const isHover = useHover(ref)

  const secRef = useRef()
  const secRefIsHover = useHover(secRef)

  return (
    <div style={{ margin: '20px 0' }}>
      <div
        ref={ref}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '0 5px 0 0',
          background: isHover ? 'red' : 'blue',
        }}
      >
        isHover
      </div>
      <div
        ref={secRef}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '0 0 5px 0',
          background: secRefIsHover ? 'black' : 'yellow',
        }}
      >
        isHover
      </div>
    </div>
  )
}

export default Hover
