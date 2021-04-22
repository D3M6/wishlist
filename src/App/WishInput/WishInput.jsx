/**
 * import necessary libraries
 */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
/**
 * Create a React functional component with prop-types
 * Component as stateless presentational component with callback 'onNewWish'
 * @returns JSX DOM
 */
const WishInput = ({ onNewWish }) => {
  const [newWishText, setNewWishText] = useState('');
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New Wishlist</legend>
      <input 
        className="wish-input__field" 
        placeholder="Enter your wish here" 
        value={newWishText}
        onChange={e => setNewWishText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newWishText.length) {
            onNewWish({done: false, text: newWishText});
            setNewWishText('');
          }
        }}
      />
    </fieldset>
  );
};
/**
 * Define propTypes types of attributes
 */
WishInput.propTypes = {
  onNewWish: PropTypes.func,
};
/**
 * Define propTypes default value for attributes
 */
WishInput.defaultProps = {
  onNewWish: () => {},
};
/**
 * export WishInput component by default
 */
export default WishInput;
