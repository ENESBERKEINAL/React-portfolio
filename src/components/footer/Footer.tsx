import React from "react";
import "./Footer.css";
import LinkedinIcon from "./assets/LinkedinIcon";
import XIcon from "./assets/XIcon";
import Instagram from "./assets/Instagram";
import Twitch from "./assets/Twitch";
import Youtube from "./assets/Youtube";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="Footer">
        <div className="contact-text">Contact</div>
        <div className="Footer-sections">
          <div className="Footer-sections-linkedin footer-icons">
            <a
              href="https://www.linkedin.com/in/enesberkeinal/"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className="Footer-sections-x footer-icons">
            <a href="https://twitter.com/Smellnes" target="_blank">
              <XIcon />
            </a>
          </div>
          <div className="Footer-sections-instagram footer-icons">
            <a href="https://www.instagram.com/eberkeinal/" target="_blank">
              <Instagram />
            </a>
          </div>
          <div className="Footer-sections-twitch footer-icons">
            <a href="https://www.twitch.tv/smellnes" target="_blank">
              <Twitch />
            </a>
          </div>
          <div className="Footer-sections-youtube footer-icons">
            <a
              href="https://www.youtube.com/channel/UCk0hWste759iJdWYjL18IPw"
              target="_blank"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
