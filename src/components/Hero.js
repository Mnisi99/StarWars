import React from "react";


class Hero extends React.Component {
  render() {
    return (
      <>
        <header className="container-fluid bg-dark text-white text-center p-5 my-4 hero-container">
          <h1 className="hero-text">{this.props.text}</h1>
        {
          this.props.backdrop && 
          <div
            className="hero-backdrop"
            style={{ backgroundImage: `url(${this.props.backdrop})` }}
          ></div>
        }
        </header>
      </>
    );
  }
}

export default Hero;
