import React from 'react'
import { useNavigate } from 'react-router-dom'
import useRequest from '../hooks/useRequest'
import axios from 'axios'
import Loader from './UI/Loader'

const Posts = () => {
  const navigate = useNavigate()
  const [posts, loading, error] = useRequest(fetchTodos)

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Main</button>
      {error && <h1>Error while loading </h1>}
      {loading ? (
        <Loader />
      ) : (
        posts &&
        posts.map((post) => (
          <div
            style={{ border: '1px solid black', padding: '10px' }}
            key={post.id}
          >
            {post.id}. {post.title}
          </div>
        ))
      )}
    </div>
  )
}

export default Posts
