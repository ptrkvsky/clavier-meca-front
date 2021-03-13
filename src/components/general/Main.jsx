import PropTypes from 'prop-types';
import React from 'react';

import { motion } from 'framer-motion';

const Main = ({ children }) => (
  <motion.main
    initial={{ y: -72, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.75, ease: [0.6, 0.05, -0.01, 0.9] }}
  >
    {children}
  </motion.main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
