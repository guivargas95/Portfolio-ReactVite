import { useFetch } from "../../hooks/useFetch";
import { Repository } from "../../types/RepositoryType";

export default function GithubRepositories() {

    const { data: repositories } = useFetch<Repository[]>('https://api.github.com/users/guivargas95/repos');

    return (
        <section className="bg-paleta-azul4 font-padrao">
            <div className="p-5 grid justify-center">
                <h2 className="p-5 text-center text-white text-4xl">Github Projects</h2>
                <ul className="w-80 md:w-96">
                    {repositories?.map(repo => {
                        return (
                            <li className="text-paleta-cinza p-3 border-4 border-paleta-cinza rounded-lg mt-4 grid" key={repo.name}>
                                <h3 className="text-center text-lg font-bold">{repo.name}</h3>
                                <p className="text-center">{repo.description}</p>
                                <button className="p-1 mt-2 mb-2 bg-yellow-200"><a target="_blank" href={repo.html_url}>Vem ver!</a></button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}