import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ posts }) => (
  <main>
    {posts.map(post => (
      <Article 
        key={post.id} 
        title={post.title} 
        date={post.date} 
        preview={post.preview}
        minutesToRead={post.minutesToRead} // Ensure your data includes this
      />
    ))}
  </main>
);

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      preview: PropTypes.string.isRequired,
      minutesToRead: PropTypes.number.isRequired, // Add this to your data shape
    })
  ).isRequired,
};

export default ArticleList;
