import React from 'react';
import MailBar from './MailBar';
import NavBar from './NavBar';
import NetworksBar from './NetworksBar';

const NavOverlay = () => {
  return (
    <div className='nav-overlay'>

      <div className='box-left-overlay'>
        <div className='bar' />
        <MailBar />
      </div>

      <NavBar />

      <NetworksBar />

    </div>
  );
};

export default NavOverlay;