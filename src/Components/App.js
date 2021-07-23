import './App.css';
import Header from "./Header";
import Title from "./Utility/Title";
import MovieList from "./Movie/MovieList";

function App() {
  return (
    <div className="app">
      <Header />
      <Title rows={["explore your next", "movies and tv shows"]} />
      <MovieList />
    </div>
  );
}

export default App;
