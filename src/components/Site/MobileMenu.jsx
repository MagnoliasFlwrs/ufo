import React from 'react';

const MobileMenu = ({isOpen, toggleMenu}) => {
    return (
        <div className={ isOpen ? 'mobile-menu active' : 'mobile-menu'}>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">App Features</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
            <a href="/get-started" className="get-started">
                Get started
            </a>
        </div>
    );
};

export default MobileMenu;