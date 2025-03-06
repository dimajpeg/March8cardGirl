// src/pages/PageThree.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageThree = () => {
    return (
        <div className="page-container">
            <motion.h2
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
            >
                Ты — невероятная, и я горжусь тем, что могу быть рядом с тобой!
            </motion.h2>
            <motion.div
                className="flowers"
                animate={{ x: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                🌸🌸🌸
            </motion.div>
            <Link to="/final" className="next-button">➡️</Link>
        </div>
    );
};

export default PageThree;
