import { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BadgerBeatsFavoritesContext from "../contexts/BadgerBeatsFavoritesContext";
import Song from "./Song";

const FavoriteSongs = () => {
  const [favorites] = useContext(BadgerBeatsFavoritesContext);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://cs571.org/s23/hw5/api/songs", {
      headers: {
        "X-CS571-ID": "bid_2b48c7a36a98db55355d",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
        return data;
      });
  }, []);
  return (
    <Container>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite songs</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
          {songs.map((song) =>
            favorites.includes(song.id) ? (
              <Col key={song.id}>
                <Song song={song} />
              </Col>
            ) : (
              <></>
            )
          )}
        </Row>
      )}
    </Container>
  );
};

export default FavoriteSongs;
