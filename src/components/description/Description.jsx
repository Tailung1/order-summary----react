import "./description.css";
import musicLogo  from "../../images/images/icon-music.svg"

export default function Description() {
    return (
        <>
        <div className="description">
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

            <div>
                <section className="annual-div">
                <img src={musicLogo} alt="music-icon" />
                </section>
            </div>
        </div>
        </>
    )
}