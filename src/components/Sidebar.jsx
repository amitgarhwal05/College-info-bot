import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">College Info Bot</div>

      <Link to="/" className="menu-item">Home</Link>
      <Link to="/timetable" className="menu-item">Timetable</Link>
      <Link to="/events" className="menu-item">Events</Link>
      <Link to="/faculty" className="menu-item">Faculty</Link>
      <Link to="/courses" className="menu-item">Courses</Link>

      <div className="quick-links">
        <div className="quick-title">Quick Links</div>
        <div className="quick-item">My Timetable</div>
        <div className="quick-item">Academic Calendar</div>
        <div className="quick-item">Contact Faculty</div>
      </div>
    </div>
  );
}

export default Sidebar;