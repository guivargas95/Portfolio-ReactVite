import { useFetch } from "../../hooks/useFetch";
import { Repository } from "../../types/RepositoryType";

export default function GithubRepositories() {

    const { data: repositories } = useFetch<Repository[]>('https://api.github.com/users/guivargas95/repos');

    return (
        <section className="bg-paleta-azul4 font-padrao">
            <div className="p-5">
                <h2 className="p-5 text-center text-white text-4xl">Github Projects</h2>
                <ul>
                    {repositories?.map(repo => {
                        return (
                            <li className="text-paleta-cinza p-3" key={repo.name}>
                                <h3 className="text-center text-lg font-bold">{repo.name}</h3>
                                <p className="text-center">{repo.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}