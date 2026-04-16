import React from "react";


function Alumni() {
  return (
    <div className="lakshya-page">

      {/* HERO */}
      <div className="lakshya-hero">

        <img
          src="https://poornima.edu.in/assets/images/life-at-poornima/events/alumni/1.webp"
          alt="Alumni Meet"
          className="hero-bg"
        />

        <div className="hero-content">
          <h1>Alumni Meet</h1>
          <h2>Celebrating Connections & Achievements</h2>
        </div>

      </div>

      {/* CONTENT */}
      <div className="lakshya-content">

        <p>
          An important tradition that transpires annually, the Alumni Meet weaves a vibrant fabric
          of connections and shared experiences among members of our university community.
        </p>

        <p>
          This assembly serves as a sincere remembrance of the diverse journeys that our former
          students have undertaken since their time at the university, highlighting the lasting
          impact of our academic mission.
        </p>

        <p>
          More than just a reunion, the Alumni Meet stands as a testament to the collective
          achievements and valuable contributions of our graduates across various professional domains.
        </p>

        <p>
          The event provides a platform for alumni from different batches to reconnect, share memories,
          and celebrate milestones in their careers.
        </p>

        <p>
          Through seminars, interactive sessions, and engaging discussions, the meet fosters lifelong
          learning, mentorship, and a strong sense of belonging to the university community.
        </p>

        <p>
          Ultimately, the Alumni Meet is a celebration of past success, present achievements,
          and future possibilities.
        </p>

      </div>

      {/* IMAGE GALLERY */}
      <div className="lakshya-gallery">

        <img src="https://poornima.edu.in/assets/images/life-at-poornima/events/alumni/1.webp" />
        <img src="https://poornima.edu.in/assets/images/life-at-poornima/events/alumni/2.webp" />
        <img src="https://poornima.edu.in/assets/images/life-at-poornima/events/alumni/3.webp" />
        <img src="https://poornima.edu.in/assets/images/life-at-poornima/events/alumni/4.webp" />

      </div>

    </div>
  );
}

export default Alumni;