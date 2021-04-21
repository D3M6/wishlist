import React from 'react';
import classNames from 'classnames';
import './App.css';

const wishes = [
  { text: 'Travel to the moon', done: true },
  { text: 'Go to the gym', done: false },
  { text: 'Read any book', done: false },
  { text: 'Go shopping', done: false },
];

const App = () => (
  <div className="app">
    <h1>Wishlist App</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">New Wishlist</legend>
      <input className="wish-input__field" placeholder="Enter your wish here" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ text, done }, i) => (
        <li
          key={text}
          className={classNames('wish-list__item', { 'wish-list__item--done': done })}
        >
          <label htmlFor={`wish${i}`}>
            <input id={`wish${i}`} name={`wish${i}`} type="checkbox" checked={done} />
            { text }
          </label>
        </li>
      ))}
    </ul>
    <button className="wish-clear" type="button">
      Archive wish
    </button>
  </div>
);

export default App;
