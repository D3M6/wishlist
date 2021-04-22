import React from 'react';
import './App.css';

import WishInput from './WishInput';
import WishList from './WishList';

const wishes = [
  { text: 'Travel to the moon', done: true },
  { text: 'Go to the gym', done: false },
  { text: 'Read any book', done: false },
  { text: 'Go shopping', done: false },
];

const App = () => (
  <div className="app">
    <h1>Wishlist App</h1>
    <WishInput />
    <WishList wishes={wishes} />
    <button className="wish-clear" type="button">
      Archive wish
    </button>
  </div>
);

export default App;
