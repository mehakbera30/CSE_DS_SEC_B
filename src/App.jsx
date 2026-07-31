import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './Componenet/Card'
import './App.css'
import Book from './Componenet/Book'
import Book1 from './Componenet/Book1'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>   
    <Book/>
    <Book1/>
    </>
  )
}

export default App
