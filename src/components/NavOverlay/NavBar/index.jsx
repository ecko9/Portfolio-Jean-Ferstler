import React from 'react';

const NavBar = ({ setDisplayElement }) => {
  return (
    <div className='NavBar'>

      <div className='NavTitle' onClick={e => setDisplayElement("AboutMe")}>
        <h1>
          <p className='firstname'>{'Jean'}&nbsp;</p>
          <p className='lastname'>{'Ferstler'}</p>
        </h1>
      </div>

      <div className='bar' />

      <div className='NavLinks'>
        <div className='NavProjects' onClick={e => setDisplayElement("Works")}>
          <h2>Projets</h2>
        </div>
        <div className='NavProjects' onClick={e => setDisplayElement("Career")}>
          <h2>Parcours</h2>
        </div>
      </div>


    </div>
  );
};

export default NavBar;