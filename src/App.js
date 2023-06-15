import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComponentsContainer from './components/ComponentsContainer'
import ListEndlessScroll from './components/ListEndlessScroll'
import Posts from './components/Posts'
import ReduxPractice from './components/ReduxPractice'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cart from './components/Cart'
import ReduxProductDetails from './components/ReduxProductDetails'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="wrapper">
          <div className="app">
            <header className="header">Some practice React features</header>
            <main className="main">
              <Routes>
                <Route path="*" element={<ComponentsContainer />} />
                <Route path="list" element={<ListEndlessScroll />} />
                <Route path="posts" element={<Posts />} />
                <Route path="redux" element={<ReduxPractice />} />
                <Route path="cart" element={<Cart />} />
                <Route path="details/:id" element={<ReduxProductDetails />} />
              </Routes>
            </main>
            <footer className="footer">React</footer>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
