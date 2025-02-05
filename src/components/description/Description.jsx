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
                <img src={musicLogo} alt="music-icon"  />

                <section className="plan">
                    <span className="plan-text">Annual Plan</span>
                    <span className="year-text">$59.99/year</span>
                </section>
                </section>
                <span className="change">Change</span>
            </div>
            <button className="payment">Proceed to Payment</button>
            <button className="cancel">Cancel Order</button>
        </div>
        </>
    )
}