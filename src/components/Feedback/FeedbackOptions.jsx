import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback = () => {} }) => {
  return (
    <div className={s.options}>
      {options.map(option => {
        return (
          <div key={option}>
            <button className={s.btn} value={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
