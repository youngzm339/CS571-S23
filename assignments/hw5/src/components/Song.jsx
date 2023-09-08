import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import BadgerBeatsFavoritesContext from "../contexts/BadgerBeatsFavoritesContext";
const Song = (props) => {
  const [favorites, setFavorites] = useContext(BadgerBeatsFavoritesContext);
  const isFavorite = favorites.includes(props.song.id);
  const handleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== props.song.id));
    } else {
      setFavorites([...favorites, props.song.id]);
    }
  };

  return (
    <Card key={props.song.id}>
      <Card.Body>
        <Card.Title>{props.song.title}</Card.Title>
        <Card.Text>{props.song.artist}</Card.Text>
        <span className="text-muted">
          {props.song.genre} | {props.song.year} |{props.song.length}
        </span>
        <Button
          onClick={handleFavorite}
          className={isFavorite ? "btn-danger" : "btn-primary"}
        >
          {isFavorite ? "Del from Favorites" : "Add to Favorites"}
        </Button>
      </Card.Body>
      <Card.Img variant="bottom" src={props.song.img} alt={props.song.title} />
    </Card>
  );
};

export default Song;
