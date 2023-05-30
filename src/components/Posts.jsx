import React from 'react'
import { useNavigate } from 'react-router-dom'
import useRequest from '../hooks/useRequest'
import axios from 'axios'

const Posts = () => {
  const navigate = useNavigate()
  const [posts, loading, error] = useRequest(fetchTodos)

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
    return <h1>Loading ...</h1>
  }

  if (error) {
    return <h1>Error while loading </h1>
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Main</button>
      {posts &&
        posts.map((post) => (
          <div
            style={{ border: '1px solid black', padding: '10px' }}
            key={post.id}
          >
            {post.id}. {post.title}
          </div>
        ))}
    </div>
  )
}

export default Posts
