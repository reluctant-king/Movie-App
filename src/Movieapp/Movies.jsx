import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Stack } from "react-bootstrap";
import { imageUrl } from "../Urls";
import "./App.css";
import { Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { MovieContext } from "./App";

const Movies = ({ movies, title, setfirst }) => {
  useEffect(() => {
    setfirst(false);

    return () => {
      setfirst(true);
    };
  }, [setfirst]);

  const [movieslist, setmovieslist] = useState([]); //api integrationss
  useEffect(() => {
    axios.get(movies).then((response) => {
      setmovieslist(response.data.results);
    });
  }, [movies]);

  const { moviedetails, setmoviedetails } = useContext(MovieContext); //movie context passing
  // console.log(MovieContxt);
  useEffect(() => {
    setmoviedetails(movieslist);
  }, [movieslist]);
  // console.log(moviedetails);

  return (
    <>
      <div className="container  ">
        <h2 className="text-center">{title}</h2>
        <div className="card-container d-flex flex-wrap justify-content-center ">
          {movieslist.map((i, index) => {
            return (
              <div key={index} className="p-2 m-2 ">
                <Link
                  className="detail-link"
                  to={`/detailpage/${i.id}`}
                  onClick={() => setmoviedetails(i)}
                >
                  <Card
                    key={i.id}
                    className="card"
                    style={{ width: "18rem", height: "56rem" }}
                  >
                    <Card.Img variant="top" src={imageUrl + i.poster_path} />
                    <Card.Body>
                      <Card.Title>
                        <h3>{i.title}</h3>
                      </Card.Title>
                      <Card.Text>
                        {i.overview.substring(0, 250) + "...."}
                      </Card.Text>

                      <Stack spacing={1}>
                        <Rating
                          className="mt-2 mb-2"
                          name="half-rating-read"
                          defaultValue={i.vote_average}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                      <h6 className="mt-2 mb-2">{i.release_date}</h6>
                      <Button className="mt-2 mb-2 " variant="primary">
                        View More
                      </Button>
                    </Card.Body>
                  </Card>{" "}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
