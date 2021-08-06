import React from 'react';
import NailIcon from '../images/nails.jpg';
import WaxingIcon from '../images/waxing.png';
import LashBrowIcon from '../images/lash-brow.png';
import MassageIcon from '../images/massage.png';
import GeneralIcon from '../images/general.png';

const FaqPage = () => {
  return (
    <div className="main-container Faq">
      <h2 className="h2-title primary">frequently asked questions</h2>
      <div className="sort-by-service">
        <h3 className="nav-title primary">sort by service</h3>
        <ul>
          <li>
            <img src={NailIcon} alt="nails-icon" />
            <p>nails</p>
          </li>
          <li>
            <img src={WaxingIcon} alt="waxing-icon" />
            <p>waxing</p>
          </li>
          <li>
            <img src={LashBrowIcon} alt="lash-brows-icon" />
            <p>lash & brows</p>
          </li>
          <li>
            <img src={MassageIcon} alt="massage-icon" />
            <p>massage</p>
          </li>
          <li>
            <img src={GeneralIcon} alt="general-icon" />
            <p>general</p>
          </li>
        </ul>
      </div>
      <p className="question-bold secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing eli?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
        feugiat integer risus libero pulvinar tellus senectus sapien. Ultrices
        tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpat
        in. Rutrum adipiscing convallis facilisis vestibulum eleifend in
        ullamcorper laoreet enim. Placerat quis donec dolor et at mattis at
        feugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.
        Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purus
        vel amet vel.
      </p>
      <p className="question-bold secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing eli?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in
        neque, sed quis arcu turpis gravida aliquam dignissim. Bibendum netus
        sed amet id eleifend bibendum convallis. Dui odio purus, laoreet felis
        morbi nisi, tellus vitae. Ultricies urna porta est in tellus consectetur
        faucibus convallis dictum. Risus hendrerit maecenas nec non cras eget
        elementum. Tellus phasellus nulla urna morbi. In tincidunt elit nulla
        maecenas. Neque, aliquam id aenean risus eget metus lectus felis in. Eu
        dictum eu, ac quis sit non. Cursus sagittis et ullamcorper non pharetra,
        fringilla mauris. Ut et enim proin lectus purus. Cursus vulputate at
        faucibus varius purus vitae fermentum. Lorem ullamcorper vitae volutpat
        sit consectetur faucibus suspendisse tortor integer. Rutrum venenatis
        quam leo in at vitae turpis pretium vitae. Pellentesque feugiat arcu
        cras at. Nibh non pharetra donec egestas euismod purus vestibulum. Nam
        fringilla dui varius nec ac morbi sollicitudin sit fermentum. Et congue
        molestie massa cursus commodo et. Amet, arcu semper cras ut.
      </p>
      <p className="question-bold secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing eli?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
        feugiat integer risus libero pulvinar tellus senectus sapien. Ultrices
        tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpat
        in. Rutrum adipiscing convallis facilisis vestibulum eleifend in
        ullamcorper laoreet enim. Placerat quis donec dolor et at mattis at
        feugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.
        Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purus
        vel amet vel.
      </p>
    </div>
  );
};

export default FaqPage;
