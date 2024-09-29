import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request.data);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (e) {
        console.log("error", e);
      }
    })();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  console.log(movie);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-btns">
          <button className="banner_btn play">
            <span>
              <PlayArrowIcon className="playIcon" />
              Play
            </span>
          </button>
          <button className="banner_btn morInfoIcon">
            <InfoOutlinedIcon /> <span>More Info</span>
          </button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;
