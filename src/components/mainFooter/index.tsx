export default function MainFooter() {

    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="flex bg-black text-white h-16 w-auto font-padrao justify-center">
                <p className="mt-5">© Copyright Guilherme Vargas | {year}</p>

            </footer>
        </div>
    )
}