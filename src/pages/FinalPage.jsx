// src/pages/FinalPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalPage = () => {
    return (
        <div className="page-container">
            <motion.h1
                animate={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{ duration: 2 }}
            >
                Я тебя люблю!
            </motion.h1>
            <Link to="/" className="next-button">⬅️ На главную</Link>
        </div>
    );
};

export default FinalPage;
