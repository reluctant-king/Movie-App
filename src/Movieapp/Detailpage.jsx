import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "./App";
import { imageUrl } from "../Urls";
import { Button, Stack } from "react-bootstrap";
import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";

const Detailpage = ({ setfirst }) => {
  const { MId } = useParams();

  // console.log(MId);
  useEffect(() => {
    setfirst(false);

    return () => {
      setfirst(true);
    };
  }, [setfirst]);

  const { moviedetails } = useContext(MovieContext);
  const [movie, setmovie] = useState(moviedetails);

  useEffect(() => {
    setmovie(moviedetails);
  }, [moviedetails]);

  return (
    <div>
      <h3 className="text-center mb-4">Movie Details</h3>
      <p className="text-center mb-4">Movie ID: {MId}</p>
      <div
        className="movie-details"
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
          background: "#ffffffff",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          padding: "32px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <img
          style={{
            width: "320px",
            height: "480px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
          src={imageUrl + movie.poster_path}
          alt={movie.title}
        />
        <div style={{ flex: 1 }}>
          <h2
            style={{
              marginBottom: "16px",
              color: "#000000ff",
              marginTop: "16px",
            }}
          >
            {movie.title}
          </h2>
          <p
            style={{
              marginBottom: "24px",
              color: "#000000ff",
              marginTop: "16px",
            }}
          >
            {movie.overview}
          </p>
          <div>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#000000ff",
                marginTop: "16px",
              }}
            >
              Release Date:{" "}
              <span
                style={{
                  fontWeight: "normal",
                  color: "#000000ff",
                  marginTop: "16px",
                }}
              >
                {movie.release_date}
              </span>
            </p>
            <Stack spacing={1}>
              <Rating
                style={{ fontWeight: "normal" }}
                className="mt-2 mb-2"
                name="half-rating-read"
                defaultValue={movie.vote_average}
                precision={0.5}
                readOnly
                size="large"
              />
              <span
                style={{
                  fontWeight: "bold",
                  color: "#000000ff",
                  marginTop: "16px",
                }}
              >
                Rating: {movie.vote_average}
              </span>
             
            </Stack>
            <Button className="mt-2 mb-2 w-50" variant="primary">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
