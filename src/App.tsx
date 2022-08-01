import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store';
import JokeHeader from './components/JokeHeader';
import JokeCategories from './components/JokeCategories';
import JokePreview from './components/JokePreview';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <JokeHeader />
        <JokeCategories />
        <JokePreview />
      </Provider>
    </div>
  );
}

export default App;
