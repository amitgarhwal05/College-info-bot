import Chatbot from "./components/ChatBot";
import Timetable from "./components/timetable";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Events from "./components/Events";
import Faculty from "./components/Faculty";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="app">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="logo">College Info Bot</div>

        <div className="menu">
          <Link to='/' className="menu-item">Home</Link>
          <Link to="/timetable" className="menu-item">Timetable</Link>
          <Link to="/events" className="menu-item">Events</Link>
          <Link to="/faculty" className="menu-item">Faculty</Link>
          <Link to="/courses" className="menu-item">Courses</Link>
        </div>

        <div className="quick-links">
          <div className="quick-title">Quick Links</div>
          <div className="quick-item">My Timetable</div>
          <div className="quick-item">Academic Calendar</div>
          <div className="quick-item">Contact Faculty</div>
        </div>
      </div>

      {/* YOUR CHAT UI */}


      <Routes>

        <Route path="/" element={<Chatbot />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>

    </div>
  );
}

export default App;