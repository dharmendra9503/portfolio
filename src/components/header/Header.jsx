import React, { useState } from 'react';
import './Header.css';

const Header = () => {

    /* Change Background Header */
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");

        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /*========================= Toggle Menu =========================*/
    const [Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className='nav__logo'>DHARMENDRA</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => {setActiveNav("#home")}} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon" />
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => {setActiveNav("#about")}} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon" />
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#education" onClick={() => {setActiveNav("#education")}} className={activeNav === "#education" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-book-reader nav__icon" />
                                Education
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => {setActiveNav("#skills")}} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon" />
                                Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" onClick={() => {setActiveNav("#projects")}} className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-window nav__icon" />
                                Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => {setActiveNav("#contact")}} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-envelope nav__icon" />
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <nav className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </nav>
            </nav>
        </header>
    )
}

export default Header
