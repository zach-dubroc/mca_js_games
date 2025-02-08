import React, { useState } from "react";
import "../styles/Card.css";

const Upload = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleLogin = () => {
    const [firstName] = username.split("_");
    const expectedPassword =
      firstName.charCodeAt(0).toString() + firstName.charCodeAt(2).toString();

    if (password === expectedPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Project submitted:", { image, description, link });
    alert("Project uploaded successfully!");
    onClose();
  };

  return (
    <div className="upload-popup">
      <div className="upload-content">
        {!isAuthenticated ? (
          <>
            <h2>Upload</h2>
            <input
              type="text"
              placeholder="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={onClose}>Close</button>
          </>
        ) : (
          <>
            <h2>Upload Your Project</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Project Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
              <button type="submit">Upload</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Upload;
