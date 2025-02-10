import React, { useState } from "react";
import "../styles/Card.css";
import axios from "axios";

const Upload = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [game_link, setGameLink] = useState("");
  const [git_link, setGitLink] = useState("");
  const api_url = "localhost:8000/api/user_upload";
  const handleLogin = () => {
    const [firstName] = username.split("_");
    const expectedPassword = "123";
    //firstName.charCodeAt(0).toString() + firstName.charCodeAt(2).toString();
    // pass hardcoded for testin
    if (password === expectedPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    formData.append("game_link", game_link);
    formData.append("git_link", git_link);

    try {
      const res = await axios.post(api_url, formData);
      console.log(res.data);
      console.log(res);
      console.log("Project submitted:", {
        image,
        description,
        game_link,
        git_link,
      });
      onClose();
    } catch (err) {
      console.log(err);
    }
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
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
              <input
                type="text"
                placeholder="description(255)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="link to game"
                value={game_link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="link to github"
                value={git_link}
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
