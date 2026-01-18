import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Ebook from './components/Ebook';
import Home from "./components/Home"
import Footer from './components/Footer';

function App() {
  {/** Pages value */}
  const [page, setPage] = useState("home");

  return (
    <>
     <Navbar changePage={setPage}></Navbar>
     <main>
      {/** Pages options */}
      {page === "ebook" && <Ebook></Ebook>}
      {page === "home" && <Home></Home>}
     </main>
     <Footer></Footer>
    </>
  )
}


export default App
