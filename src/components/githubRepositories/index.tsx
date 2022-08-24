import { useFetch } from "../../hooks/useFetch";
import { Repository } from "../../types/RepositoryType";

export default function GithubRepositories() {

    const { data: repositories } = useFetch<Repository[]>('https://api.github.com/users/guivargas95/repos');

    return (
        <section className="bg-paleta-azul4 font-padrao">
            <div className="p-5 grid justify-center">
                <h2 className="p-5 text-center text-white text-4xl">Github Projects</h2>
                <ul className="w-80 md:w-96 grid lg:grid-cols-2 lg:w-auto">
                    {repositories?.map(repo => {
                        if (repo.homepage == "") {
                            return (
                                <li className="text-paleta-cinza p-3 border-2 border-paleta-cinza rounded-lg mt-4 flex-col text-center lg:w-96 lg:ml-2 lg:mr-2" key={repo.name}>
                                    <h3 className="text-lg font-bold text-white">{repo.name}</h3>
                                    <p className="">{repo.description}</p>
                                    <a target="_blank" href={repo.html_url}><button className="text-black hover:font-bold p-2 mt-2 mb-2 rounded-md bg-yellow-100 hover:bg-yellow-300">Repositorio</button></a>
                                </li>
                            )
                        } else {
                            return (
                                <li className="text-paleta-cinza p-3 border-2 border-paleta-cinza rounded-lg mt-4 flex-col text-center lg:w-96 lg:ml-2 lg:mr-2" key={repo.name}>
                                    <h3 className="text-lg font-bold text-white">{repo.name}</h3>
                                    <p className="">{repo.description}</p>
                                        <a target="_blank" href={repo.html_url}><button className="text-black hover:font-bold p-2 mt-2 mb-2 mr-2 ml-2 rounded-md bg-yellow-100 hover:bg-yellow-300">Repositorio</button></a>
                                        <a target="_blank" href={repo.homepage}><button className="text-black hover:font-bold p-2 mt-2 mb-2 mr-2 ml-2 rounded-md bg-red-300 hover:bg-red-500">Projeto</button></a>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </section>
    )
}