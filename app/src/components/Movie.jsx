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
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }`
        );
        setMovies(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&query=${searchTerm}`
      );
      setMovies(response.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <h2 style={{ marginBottom: "10px" }}>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            />
            <p style={{ textAlign: "center" }}>
              <strong>Year:</strong>{" "}
              {new Date(movie.release_date).getFullYear()}
            </p>
            <p style={{ textAlign: "center" }}>
              <strong>Popularity:</strong>{" "}
              {new Date(movie.popularity).getFullYear()}
            </p>
          </MovieCard>
        ))}
      </MoviesContainer>
    </>
  );
};

export default Movie;
