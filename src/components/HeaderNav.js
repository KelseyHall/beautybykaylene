import React, { useState } from 'react';
import header from '../images/header.png';
import FacebookIcon from '../images/facebookIcon.png';
import InstaIcon from '../images/insta-Icon.png';

import { NavLink } from 'react-router-dom';
import { FacebookLink, InstagramLink } from './LinkReference';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((x) => !x);

  const buttonClasses = `navHeader__toggle ${
    isOpen ? 'close_menu' : 'open_menu'
  }`;

  return (
    <div>
      <nav className="navHeader">
        <img
          className="headerImg"
          src={header}
          alt="beauty by Kaylene header "
        />
        <button
          id="navHeader__toggle"
          className={buttonClasses}
          data-toggle="collapse"
          type="button"
          onClick={handleToggle}
        >
          <svg className="menu" viewBox="0 0 448 512" width="100" title="bars">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
          <svg
            className="close"
            viewBox="0 0 384 512"
            width="100"
            title="times"
          >
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </button>

        <ul className={`navHeader__menu ${!isOpen ? 'hide-item' : ' '}`}>
          <li
            className="navHeader__menu__item"
            onClick={() => setIsOpen(false)}
          >
            <NavLink exact to="/" activeClassName="active">
              home
            </NavLink>
          </li>
          <li
            className="navHeader__menu__item"
            onClick={() => setIsOpen(false)}
          >
            <NavLink to="/services" activeClassName="active">
              services
            </NavLink>
          </li>
          <li
            className="navHeader__menu__item"
            onClick={() => setIsOpen(false)}
          >
            <NavLink to="/gallery" activeClassName="active">
              gallery
            </NavLink>
          </li>
          <li
            className="navHeader__menu__item"
            onClick={() => setIsOpen(false)}
          >
            <NavLink to="/booknow" activeClassName="active">
              book now
            </NavLink>
          </li>
          <li>
            <div className="nav-quick-contact">
              <p>
                text
                <br />
                <a className="nav-contact" href="tel:905-644-8880">
                  905.644.8880
                </a>
              </p>
              <p>our socials</p>
              <ul className="nav-media-socials">
                <li>
                  <a href={FacebookLink} target="_blank" rel="noreferrer">
                    <img src={FacebookIcon} alt="facebook-icon" />
                  </a>
                </li>
                <li>
                  <a href={InstagramLink} target="_blank" rel="noreferrer">
                    <img src={InstaIcon} alt="instagram-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <div className="floating-socials">
        <a href={FacebookLink} target="_blank" rel="noreferrer">
          <img src={FacebookIcon} alt="facebook-icon" />
        </a>
        <a href={InstagramLink} target="_blank" rel="noreferrer">
          <img src={InstaIcon} alt="instagram-icon" />
        </a>
      </div>
    </div>
  );
};

export default HeaderNav;
