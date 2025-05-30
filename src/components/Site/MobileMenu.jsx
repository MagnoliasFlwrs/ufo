import React from 'react';

const MobileMenu = ({isOpen, toggleMenu}) => {

    const handleClick = (e) => {
        setTimeout(()=> {
            toggleMenu(!isOpen);
        } ,400)

    }
    return (
        <div className={ isOpen ? 'mobile-menu active' : 'mobile-menu'}>
            <ul>
                <li><a href="#about" onClick={handleClick}>About</a></li>
                <li><a href="#testimonials" onClick={handleClick}>Testimonials</a></li>
                <li><a href="#features" onClick={handleClick}>App Features</a></li>
                <li><a href="#faq" onClick={handleClick}>FAQ</a></li>
                <li><a href="#contacts" onClick={handleClick}>Contacts</a></li>
            </ul>
            <a href="/get-started" onClick={handleClick} className="get-started">
            Get started
            </a>
        </div>
    );
};

export default MobileMenu;