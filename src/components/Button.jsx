import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = (text, path) => {
  const navigate = useNavigate();
  return (
    <motion.button
      className="button rounded-pill mt-5"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate(`${path}`)}>
      {`${text}`}
    </motion.button>
  );
};

export default Button;
