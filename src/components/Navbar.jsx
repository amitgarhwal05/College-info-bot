function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">CA</div>
        <span className="brand">College Info Bot</span>
      </div>

      {/* 🌙 Toggle Button */}
      <button
        className="mode-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;