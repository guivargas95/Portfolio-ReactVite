import SkillCard from "./skillCard";


export default function CardProjects() {
    return (
        <section className="font-padrao bg-paleta-azul3 flex flex-col items-center">
            <div className=" text-white text-center items-center text-lg flex flex-col">
                <h2 className=" mt-5 mb-4 text-4xl">Software Development Skills</h2>
                <p className=" text-white w-96 md:w-96">Algumas skills que aprendi experenciando linguagens e diferentes metodologias em desenvolvimento de software</p>
            </div>
            <ul className="p-10 h-auto w-96 flex flex-col gap-4 m-1 md:grid md:grid-cols-2 md:w-auto lg:grid-cols-3">
                <li className="shadow-lg shadow-paleta-cinza bg-paleta-azul4 rounded-md w-auto h-60 mt-5 relative md:h-auto md:w-48">
                    <SkillCard title="Javascript" src="./src/assets/icons/javascript.png" alt="Ícone JavaScript" description="Criação de conteúdos dinâmicos e animados utilizando a liguagem de programação da WEB!" />
                </li>
                <li className="shadow-lg shadow-paleta-cinza bg-paleta-azul4 rounded-md w-auto h-72 mt-5 relative md:h-auto md:w-48 ">
                    <SkillCard title="HTML 5" src="./src/assets/icons/html.png" alt="Ícone HTML" description="Páginas bem marcadas que ajudam na indexação do conteúdo!" />
                </li>
                <li className="shadow-lg shadow-paleta-cinza bg-paleta-azul4 rounded-md w-auto h-72 mt-5 relative md:h-auto md:w-48 ">
                    <SkillCard title="TailWind CSS3" src="./src/assets/icons/css.png" alt="Ícone css 3" description="Páginas estilizadas e responsivas seguindo a metedologia Mobile-First!" />
                </li>
                <li className="shadow-lg shadow-paleta-cinza bg-paleta-azul4 rounded-md w-auto h-72 mt-5 relative md:h-auto md:w-48 ">
                    <SkillCard title="React.Js" src="./src/assets/icons/react.png" alt="Ícone React.JS" description="Desenvolvimento limpo, rápido e organizado com React.Js! A biblioteca do momento para renderização de componentes!" />
                </li>
                <li className="shadow-lg shadow-paleta-cinza bg-paleta-azul4 rounded-md w-auto h-72 mt-5 relative md:h-auto md:w-48 ">
                    <SkillCard title="TypeScript" src="./src/assets/icons/typescript.png" alt="Ícone Typescript" description="Arquitetura solida, tipagem estática e melhores práticas de programação com TypeScript!" />
                </li>
                <li className="shadow-lg shadow-paleta-cinza bg-paleta-azul4 rounded-md w-auto h-72 mt-5 relative md:h-auto md:w-48 ">
                    <SkillCard title="Django Rest Framework" src="./src/assets/icons/python.png" alt="Ícone Python" description="Framework para desenvolvimento de API`s a partir da linguagem de programação Python!" />
                </li>

            </ul>
        </section>
    )
}