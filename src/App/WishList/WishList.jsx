import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishList = ({ wishes }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <li
        key={text}
        className={classNames('wish-list__item', {
          'wish-list__item--done': done,
        })}
      >
        <label htmlFor={`wish${i}`}>
          <input id={`wish${i}`} name={`wish${i}`} type="checkbox" checked={done} />
          { text }
        </label>
      </li>
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool,
    text: PropTypes.string,
  })),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
