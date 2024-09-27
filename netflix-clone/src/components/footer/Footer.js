import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className="footer_data">
          <ul className="">
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
            <li>Contact</li>
          </ul>

          <ul className="">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>

          <ul className="">
            <li>Gift Cards</li>
            <li>Term of Use</li>
            <li>Corporate Information</li>
          </ul>

          <ul className="">
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy_right">
          <p>&copy; 1997-2024 Netflix,Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
