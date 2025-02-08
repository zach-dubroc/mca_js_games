import React from "react";
import Card from "./Card";
import Upload from "../components/Upload";
import { useState } from "react";

// temp data
const cardData = [
  {
    image: "https://via.placeholder.com/250",
    description: "Description 1",
    link: "https://example.com/1",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 2",
    link: "https://example.com/2",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 3",
    link: "https://example.com/3",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 4",
    link: "https://example.com/4",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 5",
    link: "https://example.com/5",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 5",
    link: "https://example.com/5",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 5",
    link: "https://example.com/5",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 5",
    link: "https://example.com/5",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 5",
    link: "https://example.com/5",
  },
  {
    image: "https://via.placeholder.com/250",
    description: "Description 5",
    link: "https://example.com/5",
  },
];

const CardList = () => {
  const [showUpload, setShowUpload] = useState(false);
  return (
    <div className="card-list-container">
      <h1>MCA JS Final Projects</h1>
      <button onClick={() => setShowUpload(true)}>Post Your Project</button>
      {showUpload && <Upload onClose={() => setShowUpload(false)} />}
      <div className="card-container">
        {cardData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
