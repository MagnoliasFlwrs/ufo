import React from "react";
import image2 from "@components/Site/site-images/footer-image-mob.png";
import image1 from "@components/Site/site-images/footer-image-pc.png";
import "./site-styles/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='bg-block'>
        <div className='images'>
          <picture>
            <source media='(max-width: 850px)' srcSet={image1} />
            <source media='(min-width: 851px)' srcSet={image1} />
            <img src={image1} alt='ufo-plans' />
          </picture>
        </div>

        <div className='shadow'></div>
        <div className='footer-nav'>
          <div className='site-content'>
            <div className='logo-row'>
              <a href='#'>
                <svg xmlns='http://www.w3.org/2000/svg' width='37' height='40' viewBox='0 0 37 40' fill='none'>
                  <path
                    d='M20.8167 4.80037C19.6341 2.61778 16.5018 2.61779 15.3193 4.80038L1.74259 29.8575C0.930259 31.3567 1.48644 33.2713 3.20129 33.8353C5.86748 34.7122 10.7365 35.8479 18.068 35.8479C25.3995 35.8479 30.2685 34.7122 32.9347 33.8353C34.6495 33.2713 35.2057 31.3567 34.3934 29.8575L20.8167 4.80037Z'
                    fill='white'
                    stroke='white'
                    strokeWidth='1.06372'
                  />
                </svg>
                UFO
              </a>
            </div>
            <div className='nav-row'>
              <ul className='footer-nav-links'>
                <li>
                  <a href='#'>Join UFO</a>
                </li>
                <li>
                  <a href='/terms-of-use'>Terms of Use</a>
                </li>
                <li>
                  <a href='/privacy-policy'>Privacy Policy</a>
                </li>
                <li>
                  <a href='/cancellation-refund-policy'>Cancellation & Refund Policy</a>
                </li>
              </ul>

              <div className='contacts-column'>
                <p className='title'>Contacts</p>
                <ul>
                  <li>
                    <p>Customer support:</p>
                    <a href='mailto:care@ufo.app'>care@ufo-weight.com</a>
                  </li>
                  <li>
                    <p>Investor inquiries:</p>
                    <a href='mailto:info@ufo.app'>info@ufo-weight.com</a>
                  </li>
                  <li>
                    <p>Phone:</p>
                    <svg
                      width='140'
                      height='24'
                      viewBox='0 0 140 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='phone-number-svg'
                      aria-label='Phone number: +48 452 097 551'>
                      <text x='0' y='18' fontSize={18} fill='#c2b9ff'>
                        +48 452 097 551
                      </text>
                    </svg>
                  </li>
                </ul>
              </div>

              <div className='contacts-column'>
                <p className='title'>Press</p>
                <ul>
                  <li>
                    <p>Media requests:</p>
                    <a href='mailto:press@ufo.app'>press@ufo-weight.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='info-row'>
              <p>
                Practical AI coaching that guides you daily — without diets, food restrictions, or judgment — towards
                lasting weight loss.
              </p>
              <span>© 2024 UFO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
