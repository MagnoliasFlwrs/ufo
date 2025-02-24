import React from 'react';
import './site-styles/faqblock.css'
import FaqAccordion from "@components/Site/FaqAccordion.jsx";

const FaqBlock = () => {
    return (
        <div className="faq-block">
            <div className="site-content">
                <h2>FAQ</h2>
                <FaqAccordion/>
            </div>
        </div>
    );
};

export default FaqBlock;