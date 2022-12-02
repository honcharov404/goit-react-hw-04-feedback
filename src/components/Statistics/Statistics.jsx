import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.statistic}>
      <div>
        Good: <span>{good}</span>
      </div>
      <div>
        Neutral: <span>{neutral}</span>
      </div>
      <div>
        Bad: <span>{bad}</span>
      </div>
      <div>
        Total: <span>{total}</span>
      </div>
      <div>
        Positive feedback: <span>{positivePercentage}%</span>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
