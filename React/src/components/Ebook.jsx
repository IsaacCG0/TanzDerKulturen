import { useState } from "react";
import schlange from "../assets/images/schlange.jpg";
import tanzpadagogik from "../assets/images/Tanzpadagogik.jpg";
import Beschreibung from "./ebook-content/Beschreibung";
import Inhaltsverzeichnis from "./ebook-content/Inhaltsverzeichnis";
import Portrat from "./ebook-content/Portrat";

const Ebook = () => {
  const [content, setContent] = useState("beschreibung");
  return (
    <div className="max-w-full overflow-x-hidden">
      {/**Title with parallax */}
      <div className="relative h-70 max-w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${schlange})` }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-brandDarkBlue lg:text-6xl md: text-3xl font-tussilago">
            Rituelle Tanzpädagogik
          </h1>
        </div>
      </div>
      <div className="h-15"></div>

      {/**Content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/4 flex flex-col justify-start lg:justify-start items-center">
          <img
            src={tanzpadagogik}
            alt="Rituelle Tanzpädagogik"
            className=" w-1/3 md:w-1/3  lg:w-full h-auto object-contain"
          />
          <br />
          <div className="w-full text-start">
            <p>Stephanie Bangoura</p>
            <h2 className="font-tussilago">Rituelle Tanzpädagogik</h2>
            <h4 className="text-gray-400">Die Kunst, Gemeinschaft zu tanzen</h4>
            <br />
            <p>2025, 371 S., 29,90 € (D)</p>
            <p>ISBN 9783763973705</p>
            <p>Nur als E-Book erhältlich</p>
          </div>
        </div>
        {/**Content PC
        * ------------------------------------
        */}
        <div className="w-full lg:w-2/4 flex-col hidden md:flex">
          <header>
            <p>Stephanie Bangoura</p>
            <h1 className="font-tussilago text-2xl">
              Grundlagen für tanzpädagogische Workshops
            </h1>
          </header>
          <div className="h-5"></div>
          <div className="flex justify-between text-2xl">
            <div>
              <button
                onClick={() => {
                  setContent("beschreibung");
                }}
                className={`text-left font-bold hover:underline hover:cursor-pointer transition ${content === "beschreibung" ? "text-brandRed" : "text-brandBlack"}`}
              >
                Beschreibung
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setContent("inhaltsverzeichnis");
                }}
                className={`text-left font-bold hover:underline hover:cursor-pointer transition ${content === "inhaltsverzeichnis" ? "text-brandRed" : "text-brandBlack"}`}
              >
                Inhaltsverzeichnis
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setContent("portrat");
                }}
                className={`text-left font-bold hover:underline hover:cursor-pointer transition ${content === "portrat" ? "text-brandRed" : "text-brandBlack"}`}
              >
                Porträt
              </button>
            </div>
          </div>
          <hr />
          {content === "beschreibung" && <Beschreibung></Beschreibung>}
          {content === "inhaltsverzeichnis" && (
            <Inhaltsverzeichnis></Inhaltsverzeichnis>
          )}
          {content === "portrat" && <Portrat></Portrat>}
        </div>
        {/**----------------------------------------------- */}

        {/**Content Mobile
         * ------------------------------------
         */}
        <div className="w-full lg:w-2/4 flex-col flex md:hidden">
          <details>
            <summary className="text-bold text-2xl">Beschreibung</summary>
            <Beschreibung></Beschreibung>
          </details>
          <details>
            <summary className="text-bold text-2xl">Inhaltsverzeichnis</summary>
            <Inhaltsverzeichnis></Inhaltsverzeichnis>
          </details>
          <details>
            <summary className="text-bold text-2xl">Porträt</summary>
            <Portrat></Portrat>
          </details>
        </div>
        {/**----------------------------------------------- */}
        <div className="w-full lg:w-1/4">
          <div className="bg-gray-300 h-auto p-5">
            <h2 className=" text-xl">Ebook PDF</h2>
            <h1 className="text-4xl font-semibold">29,90€</h1>
            <p>wbv.de</p>
            <div className="h-5"></div>
            <div
              className="bg-brandGreen font-semibold text-center p-3 border-brandWhite hover:cursor-pointer hover:brightness-75"
              onClick={() =>
                (window.location.href =
                  "https://www.wbv.de/shop/Rituelle-Tanzpaedagogik-I73705")
              }
            >
              <p>Jetzt kaufen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};
export default Ebook;
