import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishItem = ({ done, text, id, onDoneChange }) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0)
    } else { 
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge(a => a + 1);
        }
      }, 1000)
    }
    return () => clearInterval(ageInterval);
  }, [done]);
  
  return (
    <li
      key={id}
      className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warning': age >= 5 && age < 10,
        'wish-list__item--danger': age >= 10,
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
};

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
