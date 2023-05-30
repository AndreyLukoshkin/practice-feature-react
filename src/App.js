import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComponentsContainer from './components/ComponentsContainer'
import List from './components/List'
import Posts from './components/Posts'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="app">
          <header className="header">Some practice React features</header>
          <main className="main">
            <div className="container">
              <Routes>
                <Route path="*" element={<ComponentsContainer />} />
                <Route path="list" element={<List />} />
                <Route path="posts" element={<Posts />} />
              </Routes>
            </div>
          </main>
          <footer className="footer">React</footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
