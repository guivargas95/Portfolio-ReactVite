import { iCard } from "../../../types/CardType";

export default function SkillCard({ title, src, alt, description }: iCard) {

    return (
        <div className="h-auto text-center">
            <img className="w-16 ml-auto mr-auto left-0 right-0" src={src} alt={alt} />
            <h3 className="text-white mt-3">{title}</h3>
            <p className="font-bold text-paleta-cinza mt-5 md:mb-10">{description}</p>
        </div>
    )
}