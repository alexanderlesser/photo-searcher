import "./ImageList.css"; // external stylesheet
import React from "react"; // import react
import "./ImageCard"; // ImageCard component
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="image-container">
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
