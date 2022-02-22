import React from 'react';
import MailBar from './MailBar';
import NavBar from './NavBar';
import NetworksBar from './NetworksBar';

const NavOverlay = ({ setDisplayElement, displayElement }) => {
  return (
    <div className='nav-overlay'>

      <div className='box-left-overlay'>
        <div className='bar' />
        <MailBar />
      </div>

      <NavBar setDisplayElement={setDisplayElement} displayElement={displayElement} />

      <NetworksBar />

    </div>
  );
};

export default NavOverlay;