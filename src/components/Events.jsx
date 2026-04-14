function Events() {
  const events = [
    {
      title: "Lakshya – The Annual Sports & Cultural Fest 2026",
      date: "11 Feb 2026",
      desc: "Lakshya, our college’s annual flagship event",
      img: "https://poornima.edu.in/assets/images/life-at-poornima/events/lakshya/6.webp"
    },
    {
      title: "Dandiya Night",
      date: "25 March 2026",
      desc: "More than just a dance event, Raasa Leela is a celebration of culture, unity, and the vibrant spirit of Poornima University.",
      img: "https://poornima.edu.in/assets/images/life-at-poornima/events/dandiya-night/1.webp"
    },
    {
      title: "Alumni Meet",
      date: "5 April 2026",
      desc: "An important tradition that transpires annually",
      img: "https://poornima.edu.in/assets/images/life-at-poornima/events/alumni/1.webp"
    },
    {
      title: "National Level Events",
      date: "15 April 2026",
      desc: "Poornima University is a hub of excellence, hosting prestigious national events in sports",
      img: "https://poornima.edu.in/assets/images/life-at-poornima/events/national/national-19/2.webp"
    }
  ];

  return (
    <div className="page">
      <h2>🎉 Events</h2>

      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            
            {/* IMAGE */}
            <div className="event-img">
              <img src={event.img} alt={event.title} />
            </div>

            {/* CONTENT */}
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-desc">{event.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;