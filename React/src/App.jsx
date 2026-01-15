import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Ebook from './components/Ebook';
import Home from "./components/Home"

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
     <Navbar changePage={setPage}></Navbar>
     <main>
      {page === "ebook" && <Ebook></Ebook>}
      {page === "home" && <Home></Home>}
     </main>
    </>
  )
}


export default App
