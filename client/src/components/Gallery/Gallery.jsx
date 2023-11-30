import React from "react";
import "./Gallery.css";
import Masonry from "react-responsive-masonry";

function Gallery() {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    console.log(isLoading);
  }, []);
  const pictures = [
    "d1ebd7b7-3cb9-4191-b02f-d5691dfa200c-1d.jpg",
    "907fa360-90e7-40e3-810b-0750b752d0e4-1g.jpg",
    "f8645169-ebbd-4a3b-b905-203225587058-1e.jpg",
    "47218301-8883-401c-bbc9-f007de27de1f-1f.jpg",
    "3c933908-e563-4bde-9670-5caaf3d0bba9-1i.jpg",
    "947f8671-65c5-41a7-9a11-935f4a5eb8a4-1h.jpg",
    "8c360449-6fa2-4340-9642-a49cf1216e3a-17l.jpg",
    "622e565d-acfe-49af-a224-5a880572a5cf-17m.jpg",
    "8b3090b1-5136-4674-b147-24bfcdf1bded-17j.jpg",
    "fca16c83-7db5-4018-9b11-018323ebc858-17r.jpg",
    "425a2bb3-239c-453e-98fe-471640a27004-17k.jpg",
    "fd9a458f-1375-493e-a673-9df7b76d5cc1-17n.jpg",
    "a0f601ab-5e9f-4fe1-96b1-8de51f40df68-17q.jpg",
    "aa1609a7-6918-4e5c-bb15-d3eddcb00568-17p.jpg",
    "cad86f0a-877b-4ddb-bcc7-c8bf954ab3c8-17o.jpg",
    "04e5f818-0958-40f7-9a17-062236817783-18e.jpg",
    "4288bf80-28dc-444e-8da7-1c33b9447356-17s.jpg",
    "78401738-468b-4f2b-baae-e92abd434b24-18k.JPG",
    "2ba7ce78-ade3-4e94-82c7-f166bea047f0-18h.JPG",
    "5156d2a5-ee1d-4837-ab33-6f332620068f-18j.JPG",
    "5156d2a5-ee1d-4837-ab33-6f332620068f-18j.JPG",
    "ba949a96-9f40-4c93-934f-a624ac180016-18m.JPG",
    "c3f721ce-ab7a-4d21-b38e-d2276f703193-18i.JPG",
    "5195b4ab-adf7-43d3-bd66-fa8ae6d27078-18l.JPG",
    "8955ae93-8788-4440-ac57-b924f5e2b149-18g.JPG",
  ];

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-wrapper">
          <div className="galleryHeading">
            <h1>Explore Our Gallery</h1>
            <h2>Get a glipse of who we are and what we do</h2>
          </div>
          {/* <div className="image-container"> */}
          <Masonry gutter="1rem" columnsCount={2}>
            {pictures.map((picture) => {
              return (
                <div
                  data-aos="fade-up"
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    className="gallery-image"
                    src={`https://utfs.io/f/${picture}`}
                    loading="eager"
                    onLoad={() => {
                      setLoading(false);
                      console.log(isLoading);
                    }}
                    alt=""
                  />
                </div>
              );
            })}
            ;
          </Masonry>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Gallery;
