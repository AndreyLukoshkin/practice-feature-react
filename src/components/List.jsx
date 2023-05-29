import { useNavigate } from 'react-router-dom'
import useEndlessScroll from '../hooks/useEndlessScroll'
import { useRef, useState } from 'react'

const List = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const limit = 5
  const childRef = useRef()

  const getData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setPosts([...posts, ...json])
        setPage((page) => page + 1)
      })
  }

  useEndlessScroll(childRef, getData)

  return (
    <div>
      <button onClick={() => navigate('/')}>Navigate to main</button>
      {posts.map((post) => (
        <div
          style={{ border: '1px solid black', padding: '10px' }}
          key={post.id}
        >
          {post.id}. {post.title}
        </div>
      ))}
      <div ref={childRef} style={{ height: '20px', background: 'blue' }}></div>
    </div>
  )
}

export default List
