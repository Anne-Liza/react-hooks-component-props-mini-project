import React from 'react';
import PropTypes from 'prop-types';

const About = ({ image, about }) => (
  <aside>
    <img 
      src={image} 
      alt="blog logo" 
      onError={(e) => e.target.src = "https://via.placeholder.com/215"}
    />
    <p>{about}</p>
  </aside>
);

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string.isRequired,
};

About.defaultProps = {
  image: "https://via.placeholder.com/215",
};

export default About;
