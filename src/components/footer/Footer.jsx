import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Dharmendra</h1>

                {/* <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#project" className="footer__link">Project</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
            </ul> */}

                <div className="footer__social">
                    <a href="https://www.instagram.com/ll_dharmendra_lll/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/dharmendra9503" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/dharmendra9503" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    Built By Dharmendra Prajapati
                </span>
            </div>
        </footer>
    )
}

export default Footer
