import React from 'react';
import header from '../images/header.png';
import FacebookIcon from '../images/facebookIcon.png';
import InstaIcon from '../images/insta-Icon.png';

// import '../../node_modules/bootstrap/scss/bootstrap.scss';

import '../styles/style.scss';
import { NavLink } from 'react-router-dom';
import { FacebookLink, InstagramLink } from './LinkReference';

const HeaderNav = () => {
  // const [toggle, setToggle] = useState('menu');
  return (
    <div>
      <nav className="navHeader">
        <img
          className="headerImg"
          src={header}
          alt="beauty by Kaylene header "
        />
        {/*<button>{toggle}</button>*/}
        <input
          type="checkbox"
          id="navHeader__checkbox"
          className="navHeader__checkbox"
        />
        <label for="navHeader__checkbox" className="navHeader__toggle">
          <svg class="menu" viewBox="0 0 448 512" width="100" title="bars">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
          <svg class="close" viewBox="0 0 384 512" width="100" title="times">
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </label>
        <ul className="navHeader__menu">
          <li className="navHeader__menu__item">
            <NavLink exact to="/" activeClassName="active">
              home
            </NavLink>
          </li>
          <li className="navHeader__menu__item">
            <NavLink to="/services" activeClassName="active">
              services
            </NavLink>
          </li>
          <li className="navHeader__menu__item">
            <NavLink to="/gallery" activeClassName="active">
              gallery
            </NavLink>
          </li>
          <li className="navHeader__menu__item">
            <NavLink to="/contactUs" activeClassName="active">
              contact us
            </NavLink>
          </li>
          <li>
            <div className="nav-quick-contact">
              <p>
                text or call us
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
