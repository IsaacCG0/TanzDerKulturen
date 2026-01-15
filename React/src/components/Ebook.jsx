import schlange from "../assets/images/schlange.jpg"

const Ebook = () => {
    return(
        <>
        <div className="relative h-70 w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover brightness-50 z-0" style={{ backgroundImage: `url(${schlange})` }}>
        </div>
        <div className="relative z-10 text-center">
            <h1 className="text-brandYellow text-6xl font-tussilago">Rituelle Tanzpädagogik</h1>
        </div>
        </div>
        <div className="h-300">
        <p>Ebook</p>
        </div>

        </>
    )
}
export default Ebook;