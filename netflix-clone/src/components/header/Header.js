import React from "react";
import "./header.css";
import netflix_logo from "../../assets//images/netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <>
      <div className="header_outerWrap">
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
