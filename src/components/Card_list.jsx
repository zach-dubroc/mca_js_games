import React from "react";
import Card from "./Card";
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
  return (
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
  );
};

export default CardList;
