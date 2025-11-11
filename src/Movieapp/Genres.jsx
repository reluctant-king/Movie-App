import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { comedyMovies, latestMovies, popularMovies } from "../Urls";
import "./App.css";

const genreMap = {
  28: "Action",
  35: "Comedy",
  18: "Drama",
  27: "Horror",
  10749: "Romance",
  10765: "Sci-Fi & Fantasy",
  9648: "Mystery",
  // Add more as needed
};

const Genres = () => {
  // const [groupedByGenre, setGroupedByGenre] = useState({});

  // useEffect(() => {
  //   const fetchAllMovies = async () => {
  //     try {
  //       const [comedyRes, latestRes, popularRes] = await Promise.all([
  //         axios.get(comedyMovies),
  //         axios.get(latestMovies),
  //         axios.get(popularMovies),
  //       ]);

  //       const allMovies = [
  //         ...comedyRes.data.results,
  //         ...latestRes.data.results,
  //         ...popularRes.data.results,
  //       ];

  //       const genreGroups = {};

  //       allMovies.forEach((movie) => {
  //         movie.genre_ids.forEach((genreId) => {
  //           const genreName = genreMap[genreId];
  //           if (genreName) {
  //             if (!genreGroups[genreName]) {
  //               genreGroups[genreName] = [];
  //             }
  //             genreGroups[genreName].push(movie);
  //           }
  //         });
  //       });

  //       setGroupedByGenre(genreGroups);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   };

  //   fetchAllMovies();
  // }, []);

  // const genres = Object.keys(groupedByGenre);

  return (
    <div>
      {/*<div className="bg-dark text-white py-4">
      <h1 className="text-center text-white bg-secondary p-3 rounded w-50 mx-auto mb-4">
        Browse by Genre
      </h1>

      <ul className="genre-list text-center mb-5">
        {genres.map((genre) => (
          <li key={genre} style={{ display: "inline", margin: "0 10px" }}>
            <a href={`#${genre}`} style={{ color: "#0dcaf0", textDecoration: "none" }}>
              {genre}
            </a>
          </li>
        ))}
      </ul>

      {genres.map((genre) => (
        <Container id={genre} key={genre} className="mb-5">
          <h2 className="text-white mb-4 text-center">{genre}</h2>
          <Row className="g-4">
            {groupedByGenre[genre].map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Front */}
      {/* <div className="flip-card-front">
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://via.placeholder.com/500x750?text=No+Image"
                        }
                        alt={movie.title}
                        className="img-fluid"
                        style={{ height: "400px", width: "100%", objectFit: "cover" }}
                      />
                    </div>

                     Back 
                    <div className="flip-card-back d-flex flex-column justify-content-between p-3 text-white bg-dark">
                      <div>
                        <h5>{movie.title}</h5>
                        <p style={{ fontSize: "0.85rem" }}>
                          {movie.overview?.length > 150
                            ? movie.overview.substring(0, 150) + "..."
                            : movie.overview}
                        </p>
                        <p className="text-muted">Release: {movie.release_date || "N/A"}</p>
                      </div>
                      <Button variant="primary">View Details</Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container> 
      ))}
    </div>*/}
    </div>
  );
};

export default Genres;
