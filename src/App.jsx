import Chatbot from "./components/ChatBot";
import Timetable from "./components/timetable";
import Events from "./components/Events";
import Courses from "./components/Courses";
import Lakshya from "./components/Events/Lakshya";
import Dandiya from "./components/Events/Dandiya";
import Alumni from "./components/Events/Alumni";

import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app">

      {/* ================= SIDEBAR ================= */}
      <div className="sidebar">
        <div className="logo">College Info Bot</div>

        <div className="menu">
          <NavLink to="/" className="menu-item">Home</NavLink>
          <NavLink to="/timetable" className="menu-item">Timetable</NavLink>
          <NavLink to="/events" className="menu-item">Events</NavLink>
          <NavLink to="/courses" className="menu-item">Courses</NavLink>
        </div>

        <div className="quick-links">
          <div className="quick-title">Quick Links</div>

          {/* 👉 clickable quick links */}
          <NavLink to="/timetable" className="quick-item">
            My Timetable
          </NavLink>

          <div className="quick-item">
            Academic Calendar
          </div>

          <div className="quick-item">
            Contact Faculty
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="main-content">

    <div className="pageWrapper"></div>
        <Routes>
          <Route path="/" element={<Chatbot />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/events" element={<Events />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lakshya" element={<Lakshya />} />
          <Route path="/dandiya" element={<Dandiya />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;