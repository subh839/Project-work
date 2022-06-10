import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const Significantwork = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
  <div className="app__specialMenu-title">
    <SubHeading title="Menu that fits your palatte" />
    <h1 className="headtext__cormorant">Our Services</h1>
  </div>

  <div className="app__specialMenu-menu">
    <div className="app__specialMenu-menu_wine  flex__center">
      <p className="app__specialMenu-menu_heading">Web Services</p>
      <div className="app__specialMenu_menu_items">
        {data.webs.map((webs, index) => (
          <MenuItem key={webs.title + index} title={webs.title}  tags={webs.tags} />
        ))}
      </div>
    </div>

    <div className="app__specialMenu-menu_img">
      <img src={images.ab} alt="menu__img" />
    </div>

    <div className="app__specialMenu-menu_cocktails  flex__center">
      <p className="app__specialMenu-menu_heading">Other Services</p>
      <div className="app__specialMenu_menu_items">
        {data.others.map((others, index) => (
          <MenuItem key={others.title + index} title={others.title}  tags={others.tags} />
        ))}
      </div>
    </div>
  </div>

  <div style={{ marginTop: 15 }}>
    <button type="button" className="custom__button">View More</button>
  </div>
</div>
);

export default Significantwork;
