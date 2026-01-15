import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <h1 className="text-3xl font-bold text-white underline">
        ¡Hola Mundo desde React!
      </h1>
    </div>
  )
}

export default App
