import logotdk from "../assets/logos/LOGO_TDK.png";
import { useState } from "react";

const Navbar = ({ changePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-brandWhite shadow-md p-4 flex justify-between lg:justify-start items-center sticky top-0 z-50 gap-6">
      <div onClick={() => changePage("home")} className="hover:cursor-pointer z-10">
        <img  src={logotdk} alt="logo" className="h-10 w-auto"></img>
      </div>

      {/**Mobile navbar */}
      <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex lg:hidden p-2 focus:outline-none "
      >
        <svg className="hover:cursor-pointer w-8 h-8" viewBox="-0.5 0 25 25" fill="none">
          <path d="M2 12.32H22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M2 18.32H22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M2 6.32001H22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
      {/**Mobile menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col mt-4 space-y-4 pb-2 border-t pt-4">
          <button onClick={() => { changePage("home"); setIsOpen(false); }} className="text-left font-medium hover:text-blueSecondary hover:underline hover:cursor-pointer transition">Home</button>
          <button onClick={() => { changePage("ebook"); setIsOpen(false); }} className="text-left font-medium hover:text-blueSecondary hover:underline hover:cursor-pointer transition">E-Book</button>
        </div>
      )}

      </div>


      {/**Desktop navbar */}
      <div className="hidden lg:flex gap-6">
        <button onClick={() => changePage("home")} className="hover:text-blueSecondary hover:underline hover:cursor-pointer transition">Home</button>
        <button onClick={() => changePage("ebook")} className="hover:text-blueSecondary hover:underline hover:cursor-pointer transition">E-Book</button>
      </div>
    </nav>
  )
}

export default Navbar;

