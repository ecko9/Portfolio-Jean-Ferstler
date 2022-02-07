import React, { useRef } from 'react';
import MiddleCubeTop from '../MiddleCubeTop';
import MiddleTriangle from '../MiddleTriangle';

const WelcomeMiddleAnimation = ({ bgSize }) => {

  const [isAnimated, setIsAnimated] = React.useState(false)
  const [isAnimationLaunched, setIsAnimationLaunched] = React.useState(false)
  const [isAnimationFinished, setIsAnimationFinished] = React.useState(false)

  React.useEffect(
    () => {
      if (isAnimated && !isAnimationLaunched)
        setIsAnimationLaunched(true)
      return;
    }, [isAnimated]
  )

  return (
    <div className='bg-middle' >

      <div className='bg-middle-center bg-middle-center-bot' >
        {Array.from({ length: 4 }).map((n, i) => (
          <MiddleTriangle
            key={i}
            index={i + 1}
            isAnimationFinished={isAnimationFinished}
            isAnimated={isAnimated}
            size={Math.floor(bgSize / 10)}
          />
        ))}
      </div>

      <div className='bg-middle-center bg-middle-center-top' onMouseEnter={e => setIsAnimated(true)} onMouseLeave={e => setIsAnimated(false)}>
        {Array.from({ length: 4 }).map((n, i) => (
          <MiddleCubeTop
            key={i}
            index={i + 1}
            isAnimated={isAnimated}
            isAnimationLaunched={isAnimationLaunched} setIsAnimationLaunched={setIsAnimationLaunched}
            isAnimationFinished={isAnimationFinished} setIsAnimationFinished={setIsAnimationFinished}
          />))}
      </div>

    </div>
  );
};

export default WelcomeMiddleAnimation;