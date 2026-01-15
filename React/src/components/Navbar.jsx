import logotdk from "../assets/logos/LOGO_TDK.png";


const Navbar = ({changePage})=>{
    return(
    <nav className="bg-brandWhite shadow-md p-4 flex justify-start items-center sticky top-0 z-50 gap-6">
        <div>
        <img src={logotdk} alt="logo" className="h-10 w-auto"></img>
        </div>

        <div className="flex gap-6">
          <button onClick={() => changePage("home")} className="hover:text-blueSecondary hover:underline hover:cursor-pointer transition">Home</button>
          <button onClick={() => changePage("ebook")} className="hover:text-blueSecondary hover:underline hover:cursor-pointer transition">E-Book</button>
        </div>
      </nav>
    )
}

export default Navbar;

