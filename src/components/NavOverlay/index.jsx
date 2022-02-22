import React from 'react';
import MailBar from './MailBar';
import NavBar from './NavBar';
import NetworksBar from './NetworksBar';

const NavOverlay = ({ setDisplayElement, displayElement }) => {
  return (
    <div className='nav-overlay'>
      <NavBar setDisplayElement={setDisplayElement} displayElement={displayElement} />

      <div className='box-left-overlay'>
        <div className='bar' />
        <NetworksBar />
      </div>
      <MailBar />


    </div>
  );
};

export default NavOverlay;