import React from 'react';
import MiddlePresentation from '../MiddlePresentation';
import NavOverlay from '../NavOverlay';

const Content = () => {

  const [displayElement, setDisplayElement] = React.useState("AboutMe")

  return (
    <div className='Content'>
      <NavOverlay setDisplayElement={setDisplayElement} displayElement={displayElement} />
      <MiddlePresentation displayElement={displayElement} />
    </div>
  );
};

export default Content;