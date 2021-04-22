import React, {useState} from 'react';
import './App.css';

import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { done: true, text: 'Travel to the moon' },
  { done: false, text: 'Go to the gym' },
  { done: false, text: 'Read any book' },
  { done: false, text: 'Go shopping' },
];

const App = () => {
  const [wishes, setNewWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>Wishlist App</h1>
      <WishInput onNewWish={ wish => setNewWishes([wish, ...wishes])} />
      <WishList wishes={wishes} onWishesChange={setNewWishes}/>
      <button 
        className="wish-clear"
        type="button"
        onClick={() => setNewWishes(wishes.filter(wish => !wish.done))}
      >
        Archive wish
      </button>
    </div>
  );
};

export default App;
