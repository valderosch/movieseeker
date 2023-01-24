import React from "react";
import { useEffect } from "react";

const API_URL = 'http://www.omdbapi.com?apikey=ddf18bce';

function App() {
  //Searchbar API
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }

  useEffect(()=> {
    searchMovies('Batman');
  },[]);  
  return (
    <h1>App</h1>
  );
}

export default App;
