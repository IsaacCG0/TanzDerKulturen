import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-nowrap h-screen w-full'>

    <div className="flex flex-col justify-center h-screen bg-slate-900 w-1/4">
      

      <div className="w-full">
        <h1 className=" text-3xl font-tussilago-bold text-white underline p-4">
          ¡Hola Mundo desde React!
        </h1>
      </div>

      <div className="w-full">
        <p className='text-white p-4'>
          Estoy probando tailwind
        </p>
      </div>

    </div>

    <div className="flex flex-col justify-center h-screen bg-amber-50 w-3/4">
      

      <div className="w-full">
        <h1 className="text-3xl font-bold underline p-4">
          ¡Hola Mundo desde React!
        </h1>
      </div>

      <div className="w-full">
        <p className=' p-4'>
          Estoy probando tailwind
        </p>
      </div>

    </div>

    </div>
  )
}


export default App
