import React from 'react';

const ButtonEnterWebSite = ({ setAnimation, setDisplayWelcomeAnimation }) => {

  const stopAnimation = (e) => {
    setAnimation('stop-animation')
    setTimeout(() => { setDisplayWelcomeAnimation(false) }, 2000)
  }

  return (
    <div className='button-enter-ws link' onClick={e => stopAnimation()}>
      <span>VISITER</span>
    </div>
  );
};

export default ButtonEnterWebSite;