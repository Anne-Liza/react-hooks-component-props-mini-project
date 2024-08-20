import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date = "January 1, 1970", preview, minutesToRead }) => {
  const getReadingTimeIndicator = (minutes) => {
    if (minutes <= 30) {
      return '☕️'.repeat(Math.ceil(minutes / 5));
    } else {
      return '🍱'.repeat(Math.ceil(minutes / 10));
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getReadingTimeIndicator(minutesToRead)} {minutesToRead} min read</p>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  preview: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
};

export default Article;
