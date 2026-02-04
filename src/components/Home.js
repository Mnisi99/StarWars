import React from "react";
import Hero from "./Hero";
import Footer from './Footer';
import HomeCont from "./HomeCont";
import PreviewMovies from "./PreviewMovies";
import StarWars from "./StarWars";


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      listObj: []
    }
  }

  render() {

  const search = "Star wars";
 

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${search}&page=1&include_adult=true`)
    
    .then(response => response.json())
    .then(data => {
        this.setState({
          listObj: data.results
        })
    });

    const resultHtml = this.state.listObj.map((obj, index) => {
      return <StarWars key={index} results={obj}/>
    })



    return (
      <>
        <Hero text="Welcome to the Movie App" />
        <HomeCont />
        <PreviewMovies />
        {
          resultHtml &&
          <div className='container'>
              <div className="row">
                  {resultHtml}
              </div>
          </div>
        }
        <Footer />
      </>
    );
  }
}

export default Home;
