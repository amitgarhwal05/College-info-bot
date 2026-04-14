function Faculty() {
  const faculty = [
    {
      name: "Mr. Ankiket Soni",
      subject: "Web Devlopment",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Mr. Kundan",
      subject: "Emerging Tech.",
      img: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Mrs. Rachna Tyagi",
      subject: "BEEE",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Prof. Sunita Kumari",
      subject: "Engg. Chemistry",
      img: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      name: "Dr. Lakshita Rawal",
      subject: "Engg. Chemistry Lab",
      img: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  return (
    <div className="page">
      <h2>👨‍🏫 Faculty</h2>

      <div className="faculty-container">
        {faculty.map((teacher, index) => (
          <div className="faculty-card" key={index}>

            {/* IMAGE */}
            <div className="faculty-img">
              <img src={teacher.img} alt={teacher.name} />
            </div>

            {/* DETAILS */}
            <div className="faculty-info">
              <h3>{teacher.name}</h3>
              <p>{teacher.subject}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;