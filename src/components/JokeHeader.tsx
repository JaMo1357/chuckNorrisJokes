import React, { useState } from 'react';
import { useAppDispatch } from './../store/'
import { fetchFindJoke } from './../store/jokesSlice'

function App() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useAppDispatch()

  const findJokeByText = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    dispatch(fetchFindJoke(searchText))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    
    setSearchText(e.target.value)
  }

  return (
    <header className="AppHeader">
      <div className="AppHeader-wrapper">
        <span>Chuck Norris Jokes finder </span>
        <input type="text" placeholder="Search joke ..." onInput={handleChange} />
        <button onClick={findJokeByText} className="AppHeader-find">Find</button>
      </div>
    </header>
  );
}

export default App;
