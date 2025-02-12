import React, { useState, useEffect } from "react";
import Card from "./Card";
import Upload from "./Upload";
import "../styles/Card.css";

function CardList() {
  const [posts, setPosts] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    setLoading(true);
    fetch("http://localhost:8000/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [showUpload]);

  return (
    <div className="card-list-container">
      <button className="upload-button" onClick={() => setShowUpload(true)}>
        Post Your Project
      </button>
      {showUpload && <Upload onClose={() => setShowUpload(false)} />}
      <h2>Your Projects</h2>
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div className="card-grid">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardList;
