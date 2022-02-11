import React from 'react';
import MailBar from './MailBar';
import NavBar from './NavBar';
import NetworksBar from './NetworksBar';

const NavOverlay = ({ setDisplayElement }) => {
  return (
    <div className='nav-overlay'>

      <div className='box-left-overlay'>
        <div className='bar' />
        <MailBar />
      </div>

      <NavBar setDisplayElement={setDisplayElement} />

      <NetworksBar />

    </div>
  );
};

export default NavOverlay;