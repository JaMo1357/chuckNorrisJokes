import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../store/'
import { fetchJoke } from '../store/jokesSlice'
import { jokeState } from '../ts/interfaces'
import './../styles/JokePreview.css';

export default function JokePreview() {
  const dispatch = useAppDispatch()

  const getRandomJoke = () => {
    dispatch(fetchJoke())
  }

  useEffect(() => {
    getRandomJoke()
  }, [])

  const joke = useSelector(( state: jokeState )  => state.joke)

  return (
    <div className="JokePreview">
      <div>
        <h3>Random Chuck Norris joke:</h3>
        <p>{ joke.value }</p>
      </div>
      <a href="#" onClick={getRandomJoke} className="NextJoke">Get new random joke</a>
    </div>
  );
}

