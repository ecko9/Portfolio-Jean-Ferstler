import React from 'react';
import MiddlePresentation from '../MiddlePresentation';
import NavOverlay from '../NavOverlay';

const Content = () => {

  const [displayElement, setDisplayElement] = React.useState("Works")

  return (
    <div className='Content'>
      <NavOverlay />
      <MiddlePresentation displayElement={displayElement} />
    </div>
  );
};

export default Content;