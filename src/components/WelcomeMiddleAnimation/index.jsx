import React from 'react';
import MiddleBigCube from '../MiddleBigCube';
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

      if (!isAnimated && isAnimationFinished)
        setIsAnimationLaunched(false)
      return;
    }, [isAnimated, isAnimationLaunched, isAnimationFinished]
  )

  return (
    <div className='bg-middle' >

      {Array.from({ length: 4 }).map((n, i) => (
        <MiddleBigCube
          key={i} index={i + 1}
          bgSize={bgSize}
          isAnimated={isAnimated}
          isAnimationLaunched={isAnimationLaunched} setIsAnimationLaunched={setIsAnimationLaunched}
          isAnimationFinished={isAnimationFinished} setIsAnimationFinished={setIsAnimationFinished}
        />
      ))}


      <div className='bg-middle-center bg-middle-center-bot' >
        {Array.from({ length: 4 }).map((n, i) => (
          <MiddleTriangle
            key={i}
            index={i + 1}
            isAnimated={isAnimated}
            isAnimationLaunched={isAnimationLaunched}
            isAnimationFinished={isAnimationFinished}
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
            isAnimationLaunched={isAnimationLaunched}
            isAnimationFinished={isAnimationFinished}
          />))}
      </div>

    </div>
  );
};

export default WelcomeMiddleAnimation;