import "./eventsPage.css";

const EventsPage = () => {
  return (
    <>
      <div className="bg-overlay"></div>
      <div className="first">
        <div className="title">
          <h1>DECODING DSA</h1>
        </div>
        <div className="content">
          <div className="imageContainer">
            <img src="../../poster.jpg" alt="Event Poster" />
          </div>
          <div className="textContainer">
            <h2>ABOUT WORKSHOP</h2>
            <p>
              Embark on an exciting journey into the world of Data Structures
              and Algorithms with MTC! Join us every Wednesday, Thursday, and
              Friday from 5:00 PM to 6:00 PM for an engaging workshop series
              designed to elevate your coding skills. Led by experienced
              mentors, our interactive sessions offer hands-on learning
              opportunities, practical exercises, and a supportive community
              atmosphere. Embark on a transformative journey into the
              captivating realm of Data Structures and Algorithms with the
              Microsoft Technical Community (MTC)! Brace yourself for an
              exhilarating workshop series meticulously crafted to illuminate
              the minds of enthusiasts and novices alike. Set against the
              backdrop of innovation and exploration, our sessions promise an
              immersive experience that transcends the ordinary. Gather with us
              every Wednesday, Thursday, and Friday from 5:00 PM to 6:00 PM as
              we unravel the complexities of this dynamic field. Prepare to be
              captivated by interactive sessions that breathe life into abstract
              concepts, igniting your passion for problem-solving. With each
              practical exercise, you will navigate the intricacies of coding
              with finesse, honing your skills under the guidance of seasoned
              mentors dedicated to your success. But our workshop is more than
              just a learning opportunity-its a vibrant community where
              collaboration flourishes and ideas converge. Engage with fellow
              enthusiasts, share insights, and forge connections that extend
              beyond the confines of the workshop. Whether you are a seasoned
              professional seeking to refine your craft or a curious newcomer
              eager to explore the possibilities, our doors are open to all.
              Discover the power of Data Structures and Algorithms as you embark
              on a journey of discovery, innovation, and limitless potential.
              Seize the moment, mark your calendars, and join us at MTC for an
              unforgettable workshop series.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-overlay"></div>
      <div className="second">
        <div className="content">
          <div className="speakers-title">
            <h2>SPEAKERS</h2>
          </div>
          <div className="card-container">
            {/* <div className="card card1">
              <div className="eggContainer"></div>
              <div className="icons">
                <a href="#">
                  <img src="../../insta.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../twitter.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../linkedin.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../gmail.png" alt="" />
                </a>
              </div>
            </div> */}
            <div className="card">
              <div className="eggContainer"></div>
              <div className="icons">
                <a href="#">
                  <img src="../../insta.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../twitter.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../linkedin.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../gmail.png" alt="" />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="eggContainer"></div>
              <div className="icons">
                <a href="#">
                  <img src="../../insta.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../twitter.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../linkedin.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../gmail.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button>
              <a href="#">REGISTER</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
