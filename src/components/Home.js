import React from "react";
import Hero from "./Hero";
import Footer from './Footer';
import HomeCont from "./HomeCont";
import PreviewMovies from "./PreviewMovies";


class Home extends React.Component {
  render() {
    return (
      <>
        <Hero text="Welcome to the Movie App" />
        <HomeCont />
        <PreviewMovies />
        <Footer />
      </>
    );
  }
}

export default Home;
