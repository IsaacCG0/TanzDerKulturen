import schlange from "../assets/images/schlange.jpg"
import tanzpadagogik from "../assets/images/Tanzpadagogik.jpg"

const Ebook = () => {
    return (
        <div className="max-w-full overflow-x-hidden">
            {/**Title with parallax */}
            <div className="relative h-70 max-w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-fixed bg-center bg-cover brightness-50 z-0" style={{ backgroundImage: `url(${schlange})` }}>
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-brandYellow lg:text-6xl md: text-3xl font-tussilago">Rituelle Tanzpädagogik</h1>
                </div>
            </div>
            <div className="h-15"></div>
            
            {/**Content */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/4 flex flex-col justify-start lg:justify-start items-center">
                    <img src={tanzpadagogik} alt="Rituelle Tanzpädagogik" className=" w-1/3 md:w-1/3  lg:w-full h-auto object-contain" />
                    <br />
                    <div className="w-full text-start">
                        <p>Stephanie Bangoura</p>
                        <h2 className="font-tussilago">Rituelle Tanzpädagogik</h2>
                        <h4 className="text-gray-400">Die Kunst, Gemeinschaft zu tanzen</h4>
                        <p>2025, 371 S., 29,90 € (D)</p>
                        <p>ISBN 9783763973705</p>
                        <p>Nur als E-Book erhältlich</p>
                    </div>
                </div>
                <div className="w-full lg:w-2/4 flex flex-col">
                    <header>
                        <p>
                            Stephanie Bangoura
                        </p>
                        <h1 className="font-tussilago text-2xl">
                            Grundlagen für tanzpädagogische Workshops
                        </h1>
                    </header>
                    <hr />
                    <div className=" mt-5 text-justify">
                        <p>
                            Aus der Verbindung westafrikanisch-animistischer Tanztraditionen und humanistischer
                            Psychologie hat Stephanie Bangoura eine Tanzpädagogik entwickelt,
                            die spirituelle und heilsame Potenziale des Tanzes erschließt.
                        </p>
                        <br />
                        <p>
                            Grundlage ist das Ritual als zentrales Element des Animismus, das die Autorin entmystifiziert und in pädagogische Praxis im
                            Tanz integriert. Nach einer Einführung in den Animismus und die humanistische Psychologie wird das pädagogische
                            Handwerkszeug erläutert. Konkrete Praxisanleitungen und autobiografische Elemente ermöglichen die Planung und Umsetzung
                            eigener tanzpädagogischer Workshops. Der Band endet mit einem Blick auf Rituelle Tanzpädagogik in anderen soziopolitischen
                            Diskursen sowie einem tanzpädagogischen Plädoyer für Selbst-Dekolonisierung.
                        </p>
                        <br />
                        <p>
                            Professionelle Tänzer:innen, Tanzpädagog:innen, Sozialarbeiter:innen, Therapeut:innen und alle, 
                            die Tanz und Musik beruflich in Gruppen anwenden, finden hier den Zugang zu einer ganzheitlichen und transkulturellen Pädagogik, die kreative, 
                            spirituelle und heilsame Potenziale des Tanzes für Gemeinschaftsbildung und Persönlichkeitsstärkung verbindet.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/4">
                    <div className="bg-amber-800 h-auto">

                        <h2 className="font-tussilago text-xl">
                            Grundlagen für tanzpädagogische Workshops
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Ebook;