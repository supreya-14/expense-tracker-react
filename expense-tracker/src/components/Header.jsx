import { FaBell, FaMoon } from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="top-header">
      <div className="header-right">
        <FaBell className="bell-icon" title="Notifications" />

        <FaMoon
          className="bell-icon"
          title="Dark Mode"
          onClick={() => setDarkMode(!darkMode)}
        />

        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="profile"
          />

          <div>
            <h4>Supreya</h4>
            <p>Premium User</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;