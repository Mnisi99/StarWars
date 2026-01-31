import React, { Component } from "react";
import myImage from "../pictures/denise-jans-Lq6rcifGjOU-unsplash.jpg";
import centImage from "../pictures/nikhil-mistry-z8Iw_NVO2ss-unsplash.jpg";
import cornImage from "../pictures/anh-tuan-to-D5teaYPh5oI-unsplash.jpg";

class PreviewMovies extends Component {
  render() {
    return (
      <>
        <div className="container mx-auto my-4 movie-prev">
          <div
            className="mv1"
            style={{
              background: `url(${myImage.toString()})`,
              backgroundSize: "cover",
              backgroundPosition: "center center"
            }}
          ></div>
          <div className="mv2" 
          style={{
              background: `url(${centImage})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
          }}></div>
          <div 
          className="mv3"  
          style={{
              background: `url(${cornImage})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
          }}></div>
        </div>

        <div className="base-cont">
            <p className="lead mx-5">At its core, this application is built for those who love movies as more than entertainment. It is a space designed to discover, experience, and connect with stories that matter. Our goal is to give users a seamless, engaging way to explore film whether revisiting classics or discovering something new. We are committed to delivering a platform that respects the power of storytelling and puts the viewer first.
            </p>
        </div>
      </>

    );
  }
}

export default PreviewMovies;