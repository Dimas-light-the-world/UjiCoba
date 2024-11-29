import { useState } from 'react'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import TimelinePage from './components/Timeline'
import PostPage from './components/Postpage'
import PostDetailPage from './components/PostDetailPage'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <LoginPage />
      </div>
      <div>
        <RegisterPage />
      </div>
      <div>
        <TimelinePage />
      </div>
      <div>
        <PostPage />
      </div>
      
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
