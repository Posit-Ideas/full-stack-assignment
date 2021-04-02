import React from "react";
import "../App.css";
function ImageContainer({ url, key }) {
  return (
    <div>
      <img className="singleImage" src={url} key={key} alt="" />
    </div>
  );
}

export default ImageContainer;
