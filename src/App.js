import "./App.css";
import AboutView from "./components/AboutView";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MovieView from "./components/MovieView";



function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=true`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]); // The dependency array which is used for variables that the useEffect needs to watch in case of any changes more or less like a state that changes...

/* TODO:
  > Experiment with useEffect more and more to better understand it.
  > Enhance your code for better functionality.
*/
  return (
    <div>
      <NavBar
        searchText={searchText}
        setSearchText={setSearchText}
        history={history}
      />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView searchText={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movie/:id">
          <MovieView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
