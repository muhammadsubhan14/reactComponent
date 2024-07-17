import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Movie from './Movie';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('Movie Component', () => {
  it('fetches and displays movie data', async () => {
    const movieData = {
      Title: 'Inception',
      Year: '2010',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
      Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
    };

    console.log('Mocking axios.get');
    axios.get.mockResolvedValueOnce({ data: movieData });

    await act(async () => {
      console.log('Rendering Movie component');
      render(<Movie title="Inception" />);
    });

    console.log('Expecting Loading text');
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      console.log('Waiting for Inception text');
      expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    });

    console.log('Expecting Year text');
    expect(screen.getByText(/Year: 2010/i)).toBeInTheDocument();
    console.log('Expecting Genre text');
    expect(screen.getByText(/Genre: Action, Adventure, Sci-Fi/i)).toBeInTheDocument();
    console.log('Expecting Director text');
    expect(screen.getByText(/Director: Christopher Nolan/i)).toBeInTheDocument();
  });
});