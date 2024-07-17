import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f0f0f0; 
  padding: 20px; 
`;

const MovieCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; 
  color: #333; 
`;

const Movie = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${title}&apikey=4f69cfcc`
        );
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [title]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <MoviesContainer>
      {movies.map((movie, index) => (
        <MovieCard key={index}>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} style={{ width: "100%" }} />
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
        </MovieCard>
      ))}
    </MoviesContainer>
  );
};

export default Movie;
