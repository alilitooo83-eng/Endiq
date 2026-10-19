import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="logo">
        ⚡ Endiq
      </div>

      <div className="nav-links">
        <button className="btn-outline">
          Join Session
        </button>

        <button className="btn-primary">
          Start Session
        </button>
      </div>
    </nav>
  );
}

export default Navbar;