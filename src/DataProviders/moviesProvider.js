import fetch from "node-fetch";

async function getMovies() {
    const respone = await fetch("http://localhost:3000/movies", {
        method: "GET",
        accept: "application/json"
    });
    const movies = await respone.json();

    const encodedMovies = movies.map(movie => ({
        ...movie,
        synopsis: _encodeSynopsis(movie.synopsis),
        title: _replaceSpecialCharacters(movie.title)
    }));

    const sortedMovies = encodedMovies.sort((movie1, movie2) => movie1.title.localeCompare(movie2.title));

    return sortedMovies;
}

export default getMovies;

function _encodeSynopsis(synopsis) {
    const trailingTextRegex = /(.*)(<br>.*)/; // all the synopsises end with <br><b>some date</b>
    const actualSynopsis = synopsis.match(trailingTextRegex)[1];

    // replace html special characters with regular characters
    return _replaceSpecialCharacters(actualSynopsis);
}

function _replaceSpecialCharacters(actualSynopsis) {
    return actualSynopsis.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
}
