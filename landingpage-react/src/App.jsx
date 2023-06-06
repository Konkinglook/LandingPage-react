import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import Navbar from './components/Navbar'
import Header from './components/Header'
import SectionsOne from './components/SectionsOne'
import SectionsTwo from './components/SectionsTwo'
import SectionsThree from './components/SectionsThree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <SectionsOne/>
      <SectionsTwo/>
      <SectionsThree/>
    </div>
  )
}

export default App
