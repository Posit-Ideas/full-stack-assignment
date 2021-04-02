import React from "react";
import ImageContainer from "./ImageContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../App.css";
const Images = ({ images, fetchImage }) => {
  return (
    <div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImage}
        hasMore={true}
        height={"70vh"}
        loader={
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <CircularProgress />
          </div>
        }
      >
        <div className="image-container">
          {images.map((image, index) => (
            <ImageContainer url={image.urls.thumb} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Images;
