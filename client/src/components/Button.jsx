import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// The Button component is a reusable button that allows navigation to a given path when clicked
const Button = (text, path) => {
  // useNavigate is a hook that allows us to programmatically navigate around the app
  const navigate = useNavigate();
  return (
    <motion.button
      // Add some basic styling to the button
      className="button rounded-pill mt-5"
      // Use the framer-motion library to add hover and tap animations to the button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // When the button is clicked, navigate to the specified path
      onClick={() => navigate(`${path}`)}>
      {/* Display the provided text on the button */}
      {`${text}`}
    </motion.button>
  );
};

export default Button;
