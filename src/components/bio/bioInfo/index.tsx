import { useState } from "react"

export default function BioInfo() {

    const [numTexto, setNumTexto] = useState(1)

    const textos = ['Guilherme Vargas, web app developer, loves technology, essentially curious, musician and gamer in his free time. Discovering how some things work helped guide his personal and professional development. A pixel moving on a screen, the sound of strings forming notes on a musical instrument aroused curiosities that shaped his personality and interests. Now, he looks for challenges that accelerate his development and encourage the constant search for knowledge.',
        'Guilherme Vargas, desenvolvedor de aplicações web, apaixonado por tecnologia, curioso nato, músico e gamer nas horas vagas. Descobrir como certas coisas funcionam serviram como guia para o seu desenvolvimento pessoal e profissional. Um simples pixel movendo-se em uma tela, o soar das cordas formando notas em um instrumento musical despertaram curiosidades que ajudaram a moldar sua personalidade e interesses. Hoje, procura por desafios que acelerem seu desenvolvimento e incentivem a busca constante por novos conhecimentos.']

    function TextoEnUs() {
        setNumTexto(0)
        
    }

    function TextoPtBr() {
        setNumTexto(1)
        
    }

    return (
        <div className="items-center mt-2 flex flex-col md:content-around md:mt-0 lg:mr-5">
            <div className="p-3 font-padrao">
                <button onClick={TextoPtBr} className="p-1 m-1 rounded-sm bg-paleta-cinza hover:bg-paleta-azul2">PT-BR</button>
                <button onClick={TextoEnUs} className="p-1 m-1 rounded-sm bg-paleta-cinza hover:bg-paleta-azul2">EN-US</button>
            </div>
            <p className="w-96 h-auto font-padrao p-1 border-4 border-paleta-cinza text-center rounded-lg lg:w-4/3">{textos[numTexto]}</p>
            <ul className="flex justify-center mt-5 mb-5 md:w-96 md:justify-around">
                <li><a href="https://www.linkedin.com/in/guivargas95/" target="_blank"><img src="/assets/icons/linkedin.png" className="w-16 md:w-20 p-1" alt="Linkedin" /></a></li>
                <li><a href="https://github.com/guivargas95" target="_blank"><img src="/assets/icons/github.png" className="w-16 md:w-20 p-1" alt="Github" /></a></li>
                <li><a href="https://www.instagram.com/guii.vargas/" target="_blank"><img src="/assets/icons/instagram.png" className="w-16 md:w-20 p-1" alt="Instagram" /></a></li>
            </ul>
        </div>
    )
}