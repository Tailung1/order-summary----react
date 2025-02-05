import "main.css"
import Description from "../description/Description";
import img from "../../images/images/illustration-hero.svg"

export default function Main() {
    return (
        <>
        <div className="main-div">
        <img src={img} alt="hero-img" />
        <Description />
        </div>
        </>
    )
}