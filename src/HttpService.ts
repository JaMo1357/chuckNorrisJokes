import { joke } from './ts/interfaces'

export const RANDOM_TYPE = 'random'
const CATEGORIES_TYPE = 'categories'

export async function jokeService(type: string) {
  const finalEndpoint = (type) ? type : RANDOM_TYPE

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/${finalEndpoint}`);
    const jokeData = await response.json() as joke;
    
    return jokeData;
  } catch (err: any) {
    console.error(err.message);
    return err;
  }
}

export function findJoke(searchText: string) {
  return jokeService(`search?query=${searchText}`)
}

// export function findRandomJokeByCategory(category: string) {
//   const finalEndpoint = `random?category=${category}`

//   return jokeService(finalEndpoint)
// }

export function getJokeCategories() {
  return jokeService(CATEGORIES_TYPE)
}