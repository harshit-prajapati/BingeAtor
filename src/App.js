import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  Netflix: [
    { movie: "1", src: "images/netflix/1.jpg" },
    { movie: "2", src: "images/netflix/2.jpg" },
    { movie: "3", src: "images/netflix/3.jpg" },
    { movie: "4", src: "images/netflix/4.jpg" },
    { movie: "5", src: "images/netflix/5.jpg" },
    { movie: "6", src: "images/netflix/6.jpg" },
    { movie: "7", src: "images/netflix/7.jpg" },
    { movie: "8", src: "images/netflix/8.jpg" },
    { movie: "9", src: "images/netflix/9.jpg" },
    { movie: "10", src: "images/netflix/10.jpg" }
  ],

  PrimeVideo: [
    { movie: "1", src: "images/primevideo/1.jpg" },
    { movie: "2", src: "images/primevideo/2.jpg" },
    { movie: "3", src: "images/primevideo/3.jpg" },
    { movie: "4", src: "images/primevideo/4.jpg" },
    { movie: "5", src: "images/primevideo/5.jpg" },
    { movie: "6", src: "images/primevideo/6.jpg" },
    { movie: "7", src: "images/primevideo/7.jpg" },
    { movie: "8", src: "images/primevideo/8.jpg" },
    { movie: "9", src: "images/primevideo/9.jpg" },
    { movie: "10", src: "images/primevideo/10.jpg" }
  ],
  Hotstar: [
    { movie: "1", src: "images/hotstar/1.jpg" },
    { movie: "2", src: "images/hotstar/2.jpg" },
    { movie: "3", src: "images/hotstar/3.jpg" },
    { movie: "4", src: "images/hotstar/4.jpg" },
    { movie: "5", src: "images/hotstar/5.jpg" },
    { movie: "6", src: "images/hotstar/6.jpg" },
    { movie: "7", src: "images/hotstar/7.jpg" },
    { movie: "8", src: "images/hotstar/8.jpg" },
    { movie: "9", src: "images/hotstar/9.jpg" },
    { movie: "10", src: "images/hotstar/10.jpg" }
  ]
  // Trending: [
  //   { movie: "1", src: "/images/trending/1.jpg" },
  //   { movie: "2", src: "/images/trending/2.jpg" },
  //   { movie: "3", src: "/images/trending/3.jpg" },
  //   { movie: "4", src: "/images/trending/4.jpg" },
  //   { movie: "5", src: "/images/trending/5.jpg" },
  //   { movie: "6", src: "/images/trending/6.jpg" },
  //   { movie: "7", src: "/images/trending/7.jpg" },
  //   { movie: "8", src: "/images/trending/8.jpg" },
  //   { movie: "9", src: "/images/trending/9.jpg" },
  //   { movie: "10", src: "/images/trending/10.jpg" }
  // ],
  // Latest: [
  //   { movie: "1", src: "/images/latest/1.jpg" },
  //   { movie: "2", src: "/images/latest/2.jpg" },
  //   { movie: "3", src: "/images/latest/3.jpg" },
  //   { movie: "4", src: "/images/latest/4.jpg" },
  //   { movie: "5", src: "/images/latest/5.jpg" },
  //   { movie: "6", src: "/images/latest/6.jpg" },
  //   { movie: "7", src: "/images/latest/7.jpg" },
  //   { movie: "8", src: "/images/latest/8.jpg" },
  //   { movie: "9", src: "/images/latest/9.jpg" },
  //   { movie: "10", src: "/images/latest/10.jpg" }
  // ]
};

export default function App() {
  const [platform, setplatform] = useState("Netflix");
  function platformClickHandler(platform) {
    setplatform(platform);
  }
  return (
    <div className="App">
      <div className="body-container">
        <h5 className="salutation">BingeAtor</h5>
        <div className="center-container">
          <div className="head-container">
            <h1>
              Get the finest movie list to binge watch throughout your movie
              nights
            </h1>
          </div>
          <div className="platforms">
            {Object.keys(movieDB).map((platform) => (
              <button
                className="nav-tab-active"
                onClick={() => platformClickHandler(platform)}
              >
                {platform}
              </button>
            ))}
          </div>
          <div className="thumbnails">
            {movieDB[platform].map((content) => (
              <img src={content.src} alt="top10" className="show-content" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
