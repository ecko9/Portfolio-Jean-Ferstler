import React from 'react';

const NetworksBar = () => {
  return (
    <div className='NetworksBar'>
      <div className='bar' />
      <p>Suivez Moi</p>
      <div className='bar2' />
      <div className='networks'>
        <a className='network link' href="https://github.com/ecko9?tab=repositories" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a className='network link' href="https://www.linkedin.com/in/jean-ferstler-0855b520b/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default NetworksBar;