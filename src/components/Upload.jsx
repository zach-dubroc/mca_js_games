
import React, { useState } from "react";
import "../styles/Card.css";

const Upload = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleLogin = () => {
    const expectedPassword = "123"
      //firstName.charCodeAt(0).toString() + firstName.charCodeAt(2).toString();

    if (password === expectedPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }


    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    formData.append("fname", firstName);
    formData.append("lname", lastName);
    formData.append("description", description);
    formData.append("git_link", link);
    formData.append("game_link", link);

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      })
      .then((response)=> res.json())
      .then((data)=>{
        console.log("welp there to go the data");
        
      })
    } catch (error) {
      console.error("Error uploading project:", error);
    }
  };

  return (
    <div className="upload-popup">
    <div className="upload-content">
      {!isAuthenticated ? (
        <>
          <h2>Upload</h2>
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
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {/* File input for the image/file upload */}
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
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
