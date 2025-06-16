import React, { useState, useEffect } from "react";
import Card from "./Card";
import Upload from "./Upload";
import "../styles/Card.css";

function CardList() {
  const [posts, setPosts] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const API_URL = import.meta.env.VITE_BASE_URL
  const PASSWORD = import.meta.env.PASSWORD

  const handlePasswordSubmit = () => {
    if (password === "123") {
      setShowUpload(true);
      setShowPasswordPrompt(false);
    } else {
      alert("invalid.");
    }
  };

  const fetchPosts = () => {
    setLoading(true);
    //need to pull this from env instead
    fetch(`${API_URL}/posts`)
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
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [showUpload]);

  return (
    <div className="card-list-container">
      <div className="upload-button">
        <button onClick={() => setShowPasswordPrompt(true)}>
          Post Project
        </button>
      </div>

      {showPasswordPrompt && (
        <div className="password-prompt">
          <h3>Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
          <button onClick={() => setShowPasswordPrompt(false)}>Cancel</button>
        </div>
      )}

      {showUpload && <Upload onClose={() => setShowUpload(false)} />}
      <h2>mca</h2>
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
