import React, { useEffect, useState } from 'react';
import getJoke from '../HtpService'
import '../styles/JokePreview.css';
import { joke } from '../ts/interfaces'

export default function JokePreview() {
  const [joke, setJoke] = useState({} as any);

  const getNewRandomJoke = async () => {

    const jokeData = await getJoke() as joke

    console.log('joke', jokeData);

    setJoke(jokeData)
  }

  useEffect(() => {
    getNewRandomJoke()
  }, []);

  return (
    <div className="JokePreview">
      <div>
        <h3>Random Chuck Norris joke:</h3>
        <p>{ joke.value }</p>
      </div>
      <a href="#" onClick={getNewRandomJoke} className="NextJoke">Get new random joke</a>
    </div>
  );
}

