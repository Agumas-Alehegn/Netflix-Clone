import React, { useEffect, useState } from "react";
import "./header.css";
import netflix_logo from "../../assets//images/netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const threshHold = window.innerHeight * 0.1;
    if (window.scrollY > threshHold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={`header_outerWrap ${scrolled ? "scrolled" : " "}`}>
        <ul className="left_navItem_wrap">
          <li className="navItem">
            <a className="navLink" href="/">
              <img
                src={netflix_logo}
                alt="netflix_logo"
                className="netflix_logo"
              />
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              Home
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              TV Shows
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              Movies
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              Latest
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              MyList
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              Browse by Languages
            </a>
          </li>
        </ul>
        <ul className="right_navItem_wrap">
          <li className="navItem">
            <a className="navLink" href="/">
              <SearchIcon />
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              <NotificationsNoneOutlinedIcon />
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              <PersonOutlineIcon />
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="/">
              <ArrowDropDownIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
