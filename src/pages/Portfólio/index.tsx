import Bio from "../../components/bio";
import CardProjects from "../../components/cards";
import Contato from "../../components/contato";
import MainCarousel from "../../components/mainCarousel";
import MainFooter from "../../components/mainFooter";
import MainNavbar from "../../components/mainNavbar";

export default function Index() {

    function GoToAbout() {
    }
    return (
        <div>
            <MainNavbar />
            <MainCarousel />
            <Bio />
            <CardProjects />
            <Contato />
            <MainFooter />
        </div>
    )
}