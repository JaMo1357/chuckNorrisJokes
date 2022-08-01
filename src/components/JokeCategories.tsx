import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useAppDispatch } from './../store/'
import { fetchCategories, fetchByCategory } from './../store/jokesSlice'
import { jokeState } from '../ts/interfaces'
import './../styles/JokeCategories.css'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const categories = useSelector(( state: jokeState )  => state.categories)
  
  const getRandomJokeByCategory = (category: string) => {
    dispatch(fetchByCategory(category.trim()))
  }

  return (
    <div className="JokeCategories">
      <ul className="JokeCategoriesWrapper">
        {
          categories.map(
            (category, i) => (
              <li key={i} onClick={() => getRandomJokeByCategory(category)}>{category}</li>
            )
          )
        } 
      </ul>
    </div>
  );
}

export default App;
