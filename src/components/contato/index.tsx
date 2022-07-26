export default function Contato() {
    return (
        <section className="font-padrao bg-paleta-azul4 flex flex-col items-center">
            <h2 className="text-white text-2xl md:text-4xl">Deixe sua mensagem!</h2>
            <img className="w-16 md:w-20" src="../src/assets/icons/email.png" alt="" />
            <form className="mb-10 w-96 border-2 shadow-xl shadow-paleta-azul1 border-paleta-azul1 text-paleta-cinza flex flex-col p-5 md:w-1/2">
                <label className="mt-3" htmlFor="Nome">Nome</label>
                <input className="mt-1 p-2" type="text" name="Nome" />
                <label className="mt-3" htmlFor="Mensagem">Mensagem</label>
                <textarea className="h-28 mt-1 p-2"  name="Mensagem" />
                <button className="bg-paleta-cinza text-white w-24 p-2 mt-2">Enviar</button>
            </form>
        </section>
    )
}