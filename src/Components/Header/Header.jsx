import "./header.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [value, setValue] = useState("");
  return (
    <div className="header">
      <div className="logo">
        <h1>Trip Guide</h1>
      </div>
      <div className="items">
        <h2>Let&apos;s Take a Ride</h2>
        <div className="search">
          <input
            value={value}
            onChange={(e) => setValue(e)}
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
