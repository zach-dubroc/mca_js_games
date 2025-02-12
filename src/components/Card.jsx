// Card.jsx
import React from "react";
import "../styles/Card.css";

function Card({ post }) {
  return (
    <div className="card">
      <img className="card-image" src={post.image_url} alt={post.image_title} />
      <div className="card-content">
        <h3>
          {post.fname} {post.lname}
        </h3>
        <p>{post.description}</p>
        <div className="card-buttons">
          <a
            href={post.git_link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button-link"
          >
            GitHub
          </a>
          <a
            href={post.game_link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button-link"
          >
            Play
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
