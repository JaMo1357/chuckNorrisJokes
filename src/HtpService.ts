import { joke } from './ts/interfaces'

export default async function getJoke() {

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/random`);
    const jokeData = await response.json() as joke;
    console.log(jokeData);
    return jokeData;
  } catch (err: any) {
    console.error(err.message);
    return err;
  }
}