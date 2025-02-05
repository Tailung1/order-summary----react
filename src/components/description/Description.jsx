import "./description.css";
import musicLogo  from "../../images/images/icon-music.svg"

export default function Description() {
    return (
        <>
        <div className="description">
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

            <div className="annual-div">
                <section className="plan-div">
                <img src={musicLogo} alt="music-icon" />

                <section className="plan">
                    <span>Annual Plan</span>
                    <span>$59.99/year</span>
                </section>
                </section>
                <p>Change</p>
            </div>
            <button>Proceed to Payment</button>
            <button>Cancel Order</button>
        </div>
        </>
    )
}