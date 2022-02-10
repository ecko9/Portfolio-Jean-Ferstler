import React from 'react';

const ButtonEnterWebSite = ({ setAnimation, setDisplayWelcomeAnimation }) => {

  const stopAnimation = (e) => {
    setAnimation('stop-animation')
    setTimeout(() => { setDisplayWelcomeAnimation(false) }, 3000)
  }

  return (
    <div className='button-enter-ws' onClick={e => stopAnimation()}>
      <span>Enter</span>
    </div>
  );
};

export default ButtonEnterWebSite;