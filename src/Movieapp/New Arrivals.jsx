import React, { useEffect, useState } from "react";
import axios from "axios";
import { latestMovies } from "../Urls";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css"; 

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    axios.get(latestMovies).then((response) => {
      setNewArrivals(response.data.results);
    });
  }, []);

  return (
   <div>
    {/*  <Container className="py-4">
      <h1 className="text-center text-white bg-dark p-3 rounded w-50 mx-auto mb-4">
        New Arrivals
      </h1>
      <Row className="g-4">
        {newArrivals.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <div className="flip-card">
              <div className="flip-card-inner">
                 Front Side 
                 <div className="flip-card-front">
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

                Back Side 
                <div className="flip-card-back d-flex flex-column justify-content-between p-3 text-white bg-dark">
                  <div>
                    <h5>{movie.title}</h5>
                    <p style={{ fontSize: "0.85rem" }}>
                      {movie.overview.length > 150
                        ? movie.overview.substring(0, 150) + "..."
                        : movie.overview}
                    </p>
                    <p className="text-muted">
                      Release: {movie.release_date || "N/A"}
                    </p>
                  </div>
                  <Button variant="primary">View Details</Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>*/}
    </div>
  );
};

export default NewArrivals;
