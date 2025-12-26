import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import Card from "../components/Card";

function Favorites() {
  const {favorites} = useMovieContext();

  if (favorites) {
    return (
      <div>
        <h2 className="favorites">Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) => (
                <Card movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    );
  }
  
  
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies yet.</h2>
      <p>Start adding movies to your favorites and they will apear here!</p>
    </div>
  );
}

export default Favorites;
