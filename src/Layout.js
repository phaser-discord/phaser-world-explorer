import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import Media from 'react-media';
import { Link } from 'react-router-dom';

import './Layout.css';

import Nav from './components/Nav';

const menuTrigger = (
  <div className="menu-trigger">
    <span className="menu-icon material-icons">menu</span>
    <h3>Menu</h3>
  </div>
);

const SmallScreen = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="vertPanels">
      <div className="topPanel">
        <div>
          <Collapsible
            open={open}
            trigger={menuTrigger}
            onOpening={() => setOpen(true)}
            onClosing={() => setOpen(false)}
          >
            <Nav
              onClickIssue={() => setOpen(false)}
              onSearch={() => setOpen(false)}
            />
          </Collapsible>
        </div>
      </div>
      <div className="bottomPanel">{children}</div>
    </div>
  );
};

const LargeScreen = ({ children }) => (
  <div className="horizPanels">
    <div className="leftPanel">
      <div>
        <Nav />
      </div>
    </div>

    <div className="rightPanel">
      <div>{children}</div>
    </div>
  </div>
);

const Layout = props => {
  const screenLayout = smallScreen =>
    smallScreen ? (
      <SmallScreen>{props.children}</SmallScreen>
    ) : (
      <LargeScreen>{props.children}</LargeScreen>
    );

  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="title">
          <Link to="/">Explore Phaser World</Link>
        </h1>
      </header>

      <Media query={{ maxWidth: 959 }}>{screenLayout}</Media>
    </div>
  );
};

export default Layout;
