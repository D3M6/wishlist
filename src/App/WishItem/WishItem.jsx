import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishItem = ({ done, text, id, onDoneChange }) => (
  <li
    key={id}
    className={classNames('wish-list__item', {
      'wish-list__item--done': done,
    })}
  >
    <input 
      id={id} 
      name={id} 
      checked={done} 
      type="checkbox"
      onChange={e => onDoneChange(e.target.checked)}
    />
    <label htmlFor={id}>{text}</label>
  </li>
);

WishItem.propTypes = {
  id: PropTypes.string,
  done: PropTypes.bool,
  text: PropTypes.string,
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  id: '',
  done: false,
  text: '',
  onDoneChange: () => {},
};

export default WishItem;
