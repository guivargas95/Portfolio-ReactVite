import { useState } from "react"

export default function BioInfo() {

    const [numTexto, setNumTexto] = useState(1)

    const textos = ['ENUSLorem ipsum dolor, sit amet consectetur adipisicing elit. Iste sunt rem eveniet iusto, dolorem voluptates. Voluptatibus adipisci, quas quibusdam aliquid quae at, sequi et dolor nulla alias incidunt doloremque voluptas.',
        'PTBRALorem ipsum dolor, sit amet consectetur adipisicing elit. Iste sunt rem eveniet iusto, dolorem voluptates. Voluptatibus adipisci, quas quibusdam aliquid quae at, sequi et dolor nulla alias incidunt doloremque voluptas.']

    function TextoEnUs() {
        setNumTexto(0)
        
    }

    function TextoPtBr() {
        setNumTexto(1)
        
    }

    return (
        <div className="items-center mt-2 flex flex-col md:content-around lg:mr-5">
            <div className="p-3 font-padrao">
                <button onClick={TextoPtBr} className="p-1 m-1 rounded-sm bg-paleta-cinza hover:bg-paleta-azul2">PT-BR</button>
                <button onClick={TextoEnUs} className="p-1 m-1 rounded-sm bg-paleta-cinza hover:bg-paleta-azul2">EN-US</button>
            </div>
            <p className="w-96 h-auto font-padrao p-1 border-4 border-paleta-cinza text-center rounded-lg lg:w-4/3">{textos[numTexto]}</p>
            <ul className="flex justify-center mt-5 mb-5 md:w-96 md:justify-around">
                <li><a href="#"><img src="../src/assets/icons/linkedin.png" className="w-16 md:w-20 p-1" alt="Linkedin" /></a></li>
                <li><a href="#"><img src="../src/assets/icons/github.png" className="w-16 md:w-20 p-1" alt="Github" /></a></li>
                <li><a href="#"><img src="../src/assets/icons/instagram.png" className="w-16 md:w-20 p-1" alt="Instagram" /></a></li>
            </ul>
        </div>
    )
}