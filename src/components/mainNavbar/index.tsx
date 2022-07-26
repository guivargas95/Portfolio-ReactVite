export default function MainNavbar() {
  return (
    <div>
      <header className="flex text-white bg-black border-b-4 border-paleta-azul1 p-4 justify-center flex-wrap sm:justify-around  md:justify-around lg:justify-between lg:text-2xl">
        <a className="flex justify-center ml-3 font-logo2 lg:ml-20" href="#">Guilherme Vargas</a>
        <ul className="flex lg:mr-20 w-auto">
          <li className="ml-3 hover:font-bold lg:ml-10"><button className="hover:underline"><a href="#">About Me</a></button></li>
          <li className="ml-3 hover:font-bold lg:ml-10"><button className="hover:underline"><a href="#">Skills</a></button></li>
          <li className="ml-3 hover:font-bold lg:ml-10"><button className="hover:underline"><a href="#">Projects</a></button></li>
        </ul>
      </header>
    </div>
  )
}