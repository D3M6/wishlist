/**
 * import necessary libraries
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * import necessary components
 */
import WishItem from '../WishItem';
/**
 * Create a React functional component with prop-types
 * Component as stateless presentational component with callback 'onWishesChange'
 * @returns JSX DOM with components [WishItem]
 */
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
/**
 * Define propTypes types of attributes
 */
WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape(
    WishItem.propTypes
  )),
  onWishesChange: PropTypes.func,
};
/**
 * Define propTypes default value for attributes
 */
WishList.defaultProps = {
  wishes: [],
  onWishesChange: () => {},
};
/**
 * export WishList component by default
 */
export default WishList;
