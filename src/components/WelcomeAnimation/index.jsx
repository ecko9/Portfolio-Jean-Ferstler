import React from 'react';
import ButtonEnterWebSite from './ButtonEnterWebSite';
import MiddleBigCube from './MiddleBigCube';
import MiddleCubeTop from './MiddleCubeTop';
import MiddleTriangle from './MiddleTriangle';
import TextPresentationLeft from './TextPresentationLeft';
import TextPresentationRight from './TextPresentationRight';

const WelcomeAnimation = ({ bgSize, setDisplayWelcomeAnimation }) => {

  const [isAnimated, setIsAnimated] = React.useState(false)
  const [isAnimationFinished, setIsAnimationFinished] = React.useState(false)
  const [animation, setAnimation] = React.useState("")


  return (
    <div className={`bg-middle ${animation}`}>

      {isAnimationFinished &&
        <ButtonEnterWebSite setAnimation={setAnimation} setDisplayWelcomeAnimation={setDisplayWelcomeAnimation} />
      }
      {isAnimationFinished &&
        <TextPresentationLeft />
      }
      {isAnimationFinished &&
        <TextPresentationRight />
      }

      {Array.from({ length: 4 }).map((n, i) => (
        <MiddleBigCube
          key={i} index={i + 1}
          bgSize={bgSize}
          isAnimated={isAnimated}
          isAnimationFinished={isAnimationFinished}
          setIsAnimationFinished={setIsAnimationFinished}
        />
      ))}


      <div className='bg-middle-center bg-middle-center-bot' >
        {Array.from({ length: 4 }).map((n, i) => (
          <MiddleTriangle
            key={i} index={i + 1}
            isAnimated={isAnimated}
            size={Math.floor(bgSize / 10)}
          />
        ))}
      </div>

      <div className='bg-middle-center bg-middle-center-top' onMouseEnter={e => setIsAnimated(true)} onMouseLeave={e => setIsAnimated(false)}>
        {Array.from({ length: 4 }).map((n, i) => (
          <MiddleCubeTop
            key={i} index={i + 1}
            isAnimated={isAnimated}
          />))}
      </div>

    </div>
  );
};

export default WelcomeAnimation;