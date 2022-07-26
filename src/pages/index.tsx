import Bio from "../components/bio";
import CardProjects from "../components/cards";
import Contato from "../components/contato";
import MainCarousel from "../components/mainCarousel";



export default function Index() {

    function GoToAbout() {
        
    }

    return (

        <div>
            <MainCarousel />
            <Bio />
            <CardProjects />
            <Contato/>

        </div>


    )
}