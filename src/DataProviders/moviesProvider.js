import fetch from "node-fetch";

async function getMovies(){
    const respone = await fetch("http://localhost:3000/movies", {
        method: "GET",
        accept: "application/json"
    }); 
    const movies = await respone.json();

    console.log("movies: " + JSON.stringify(movies), respone);

    return movies;
}

export default getMovies;