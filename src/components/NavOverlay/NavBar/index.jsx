import React from 'react';

const NavBar = ({ setDisplayElement, displayElement }) => {

  return (
    <div className='NavBar'>

      <div className='NavTitle link' onClick={e => setDisplayElement("AboutMe")}>
        <h1>
          <p className={displayElement === "AboutMe" ? 'firstname active' : 'firstname'}>{'Jean'}&nbsp;</p>
          <p className='lastname'>{'Ferstler'}</p>
        </h1>
      </div>

      <div className='bar' />

      <div className='NavLinks'>
        <div className={displayElement === "Works" ? 'NavProjects link active' : 'NavProjects link'} onClick={e => setDisplayElement("Works")}>
          <h2>Projets</h2>
        </div>
        <div className={displayElement === "Career" ? 'NavProjects link active' : 'NavProjects link'} onClick={e => setDisplayElement("Career")}>
          <h2>Parcours</h2>
        </div>
      </div>


    </div>
  );
};

export default NavBar;