import React from "react";
import "./Gallery.css";

function Gallery() {
  const pictures = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-wrapper">
          <div className="galleryHeading">
            <h1>Explore Our Gallery</h1>
          </div>
          <div className="image-container">
            {pictures.map((picture) => {
              return (
                <div className="image-wrapper">
                  <img
                    className="gallery-image"
                    src={require(`./assets/${picture}`)}
                  />
                  <div className="overlay"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
