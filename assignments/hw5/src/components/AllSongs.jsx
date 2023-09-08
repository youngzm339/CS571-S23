import { useEffect, useState } from "react";
import Song from "./Song";
import { Container, Row, Col } from "react-bootstrap";

function transfromTimeSecond(params) {
  let time_list = params.split(":");
  return time_list[0] * 60 + time_list[1] * 1;
}

const AllSongs = (props) => {
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
  const genreCount = songs.reduce((count, song) => {
    count.add(song.genre);
    return count;
  }, new Set()).size;

  // const genreCount = Object.keys(
  //   songs.reduce((count, song) => {
  //     count[song.genre] = (count[song.genre] || 0) + 1;
  //     return count;
  //   }, {})
  // ).length;

  return (
    <Container>
      <h1>
        We have {songs.length} songs in {genreCount} genres for a total of{" "}
        {songs.reduce(
          (sum, current) => sum + transfromTimeSecond(current.length),
          0
        )}{" "}
        seconds of music!
      </h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
        {songs.map((song) => (
          <Col key={song.id}>
            <Song song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllSongs;
