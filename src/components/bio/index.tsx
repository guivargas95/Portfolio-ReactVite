import BioInfo from "./bioInfo";
import BioPhotos from "./bioPhotos";

export default function Bio() {
    return (
        <section className="bg-paleta-azul4 text-white p-10 lg:flex lg:justify-center">
            <BioInfo />
            <BioPhotos />
        </section>
    )
}