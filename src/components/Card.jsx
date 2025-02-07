import React from "react";
import "../styles/Card.css";
import { useState } from "react";

const Card = ({ image, description, link }) => {
  const [hover, setHover] = useState(false);
  ///////////
  link = "https://github.com";
  // until actual links/ppl uploaded
  return (
    <div
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="image-container">
        <img
          height="20px"
          src={image}
          alt="[screen-shot of game]*"
          className="card-image"
        />
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="github-logo"
          />
          <p>description/info on game * </p>
          {/* so <p>{description}</p  */}
        </a>
      </a>
      <div className={`overlay ${hover ? "overlay-active" : ""}`}>
        <p>link github * + link playable game *</p>
      </div>
    </div>
  );
};

export default Card;
