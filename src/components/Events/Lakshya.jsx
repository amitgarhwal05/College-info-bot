import React from "react";
// import "./lakshya.css";

function Lakshya() {
    return (
        <div className="lakshya-page">

            {/* HERO SECTION */}
            <div className="lakshya-hero">

                <img
                    src="https://poornima.edu.in/assets/images/life-at-poornima/events/lakshya/1.webp"
                    alt="Lakshya"
                    className="hero-bg"
                />

                <div className="hero-content">
                    <h1>Lakshya</h1>
                    <h2>Annual Fest Of Poornima University</h2>
                </div>

            </div>

            {/* CONTENT */}
            <div className="lakshya-content">
                <p>
                    Lakshya, our college’s annual flagship event, transforms the campus into a vibrant hub of talent,
                    competition, and cultural diversity. This grand festival brings together a thrilling mix of cultural,
                    sporting, and e-sports competitions.
                </p>

                <p>
                    A major highlight of Lakshya is its star-studded celebrity lineup featuring artists like Farhan Akhtar,
                    Amit Trivedi, Benny Dayal, Darshan Raval and many more.
                </p>

                <p>
                    Lakshya offers a rich experience with food stalls, exhibitions, and captivating performances.
                    Attendees immerse themselves in an electrifying atmosphere filled with passion and entertainment.
                </p>

                <p>
                    Join us for unforgettable moments, thrilling contests, and a celebration of excellence!
                </p>
            </div>

        </div>
    );
}

export default Lakshya;