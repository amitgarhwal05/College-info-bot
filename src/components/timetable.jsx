import { Link } from "react-router-dom";


function Timetable() {
  const timetable = [
    { time: "9:00 - 10:00", mon: "DBMS", tue: "DSA", wed: "OS", thu: "CN", fri: "AI" },
    { time: "10:00 - 11:00", mon: "OS", tue: "DBMS", wed: "AI", thu: "DSA", fri: "CN" },
    { time: "11:00 - 12:00", mon: "CN", tue: "OS", wed: "DBMS", thu: "AI", fri: "DSA" },
    { time: "12:00 - 1:00", mon: "Break", tue: "Break", wed: "Break", thu: "Break", fri: "Break" },
    { time: "1:00 - 2:00", mon: "Lab", tue: "Lab", wed: "Lab", thu: "Lab", fri: "Lab" },
  ];

  return (
    <div className="page">
      <h2>📅 Timetable</h2>

      <div className="table">
        <div className="row header">
          <div>Time</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
        </div>

        {timetable.map((item, index) => (
          <div className="row" key={index}>
            <div>{item.time}</div>
            <div>{item.mon}</div>
            <div>{item.tue}</div>
            <div>{item.wed}</div>
            <div>{item.thu}</div>
            <div>{item.fri}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timetable;