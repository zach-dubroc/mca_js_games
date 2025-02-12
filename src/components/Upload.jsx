// Upload.jsx
import React, { useState } from "react";
import "../styles/Upload.css";

function Upload({ onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [description, setDescription] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [gameLink, setGameLink] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedFile ||
      !fname ||
      !lname ||
      !description ||
      !gitLink ||
      !gameLink
    ) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setUploading(true);

    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("description", description);
    formData.append("git_link", gitLink);
    formData.append("game_link", gameLink);

    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUploading(false);
        onClose();
      })
      .catch((err) => {
        console.error("Error uploading project:", err);
        setError("Upload failed. Please try again.");
        setUploading(false);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Post Your Project</h2>
        <form className="upload-form" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>
          <label>
            GitHub Link:
            <input
              type="url"
              value={gitLink}
              onChange={(e) => setGitLink(e.target.value)}
              required
            />
          </label>
          <label>
            Game Link:
            <input
              type="url"
              value={gameLink}
              onChange={(e) => setGameLink(e.target.value)}
              required
            />
          </label>
          <label>
            Project Image:
            <input type="file" onChange={handleFileChange} required />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
