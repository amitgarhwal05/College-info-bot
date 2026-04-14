function Courses() {
    const courses = [
        {
            title: "Bachelor of Technology (B.Tech.)",
            duration: "4 years",
            //   level: "Beginner",
            img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
        },
        {
            title: "Bachelor of Computer Application (BCA)",
            duration: "3 years",
            //   level: "Intermediate",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            title: "M.Tech.",
            duration: "2 years",
            //   level: "Advanced",
            img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
        },
        {
            title: "Master of Computer Application (MCA)",
            duration: "2 years",
            //   level: "Beginner",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        }
    ];

    return (
        <div className="page">
            <h2>📚 Courses</h2>

            <div className="courses-container">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>

                        {/* IMAGE */}
                        <div className="course-img">
                            <img src={course.img} alt={course.title} />
                        </div>

                        {/* CONTENT */}
                        <div className="course-content">
                            <h3>{course.title}</h3>

                            <p className="course-duration">{course.duration}</p>

                            {/* <span className={`course-level ${course.level.toLowerCase()}`}>
                {course.level}
              </span> */}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;