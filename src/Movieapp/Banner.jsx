import axios from "axios";
import React, { useEffect, useState } from "react";
import { comedyMovies, imageUrl } from "../Urls";
import { Button } from "react-bootstrap";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios.get(comedyMovies).then((response) => {
      const movies = response.data.results;
      setBanner(movies[Math.floor(Math.random() * movies.length)]);
    });
  }, []);
  // console.log(banner);
  return (
    <>
      <h2 className="text-center ">Banner</h2>
      <div>
        {
          <div className="banner">
            <img
              src={imageUrl + banner?.backdrop_path}
              alt={banner?.title}
              className=""
              style={{ width: "100%", height: "100%" }}
            />
            <div className="banner-content">
              <h1 className="banner-text">{banner?.name}</h1>
              <p className="banner-text">{banner?.overview}</p>
              <Button className="mt-2 mb-2 w-25" variant="primary">
                View Me
              </Button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Banner;
