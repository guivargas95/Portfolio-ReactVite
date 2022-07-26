export default function NoticiasNavbar() {
    return (
        <div>
            <header className="flex flex-wrap h-20 bg-noticia-vermelho text-white items-center justify-around">
                <a href="">News</a>
                <ul className="flex">
                    <li className="mr-4">Home</li>
                    <li className="ml-4"><input type="text" /></li>
                </ul>
            </header>
        </div>
    )
}