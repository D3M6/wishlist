import React from 'react';
import PropTypes from 'prop-types';

import WishItem from '../WishItem';

const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <WishItem 
        key={text} 
        id={`wish${i}`} 
        text={text} 
        done={done} 
        onDoneChange={(value) => {
          const updateWishes = [...wishes];
          updateWishes[i].done = value;
          onWishesChange(updateWishes);
        }}/>
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(
    WishItem.propTypes
  )),
  onWishesChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};

export default WishList;
