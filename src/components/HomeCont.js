import React from "react";

class HomeCont extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto p-3 m-4" style={{height: '8em'}}>
          
            <h2 className="lead text-center fw-bold">Your gateway to the world of movies!</h2>  
            <p className="lead">
              Discover the latest releases, explore timeless classics, and find personalized recommendations tailored just for you.  
              Grab your popcorn, sit back, and let the magic of cinema begin.
            </p> 
          
        </div>
      </>
    );
  }
}

export default HomeCont;
