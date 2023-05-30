import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const Debounce = () => {
  const [value, setValue] = useState('')

  const debouncedSearch = useDebounce(searchInJson, 1000)

  function searchInJson(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
      .then((response) => response.json())
      .then((json) => json)
  }

  const onChange = (e) => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Debounce</h3>
      <input
        style={{ padding: '10px 10px' }}
        value={value}
        type="text"
        onChange={onChange}
        placeholder="search work after delay"
      />
      <p>check network in debugger</p>
    </div>
  )
}

export default Debounce
