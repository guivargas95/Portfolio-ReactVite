import { useState } from "react"

export default function BioPhotos() {
    
    const listaFotos = ['/assets/gui/gui1.png', '/assets/gui/gui2.png', '/assets/gui/gui3.png']
    const [numFoto, setNumFoto] = useState(2)

    function SelectPhoto0() {
        setNumFoto(0)
    }

    function SelectPhoto1() {
        setNumFoto(1)
    }

    function SelectPhoto2() {
        setNumFoto(2)
    }
    
    
    return(
        <div className="flex flex-col w-auto lg:w-64 lg:ml-5 md:mt-5">
            <figure className="flex justify-center w-auto mt-2">
            <img className="border-4  max-w-xs max-h-80  " src={listaFotos[numFoto]} alt="" />
            </figure>
            <ul className="flex justify-center mt-1 lg:mt-6">
                <li className="p-1"><button onClick={SelectPhoto2}><img className="border-2 w-12 h-12 p-1" src="assets/gui/gui3.png" alt="" /></button></li>
                <li className="p-1"><button onClick={SelectPhoto0}><img className="border-2 w-12 p-1" src="assets/gui/gui1.png" alt="" /></button></li>
                <li className="p-1"><button onClick={SelectPhoto1}><img className="border-2 w-12 p-1" src="assets/gui/gui2.png" alt="" /></button></li>
            </ul>
        </div>
    )
}