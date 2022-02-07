import react from 'react';
import React from 'react';

const MiddleCubeTop = ({ index, isAnimated, isAnimationLaunched, setIsAnimationLaunched, isAnimationFinished, setIsAnimationFinished }) => {

  const [animation, setAnimation] = React.useState("")

  const sayMyName = () => {
    switch (index) {
      case 1: return "J"
      case 2: return "E"
      case 4: return "A"
      case 3: return "N"
      default: return;
    }
  }

  const swapAnimation = () => {
    if (index === 1)
      if (isAnimationLaunched && !isAnimationFinished)
        setIsAnimationFinished(true)
    if (index === 3)
      if (isAnimationLaunched && isAnimationFinished) {
        setIsAnimationFinished(false)
        setIsAnimationLaunched(false)
      }
  }

  react.useEffect(
    () => {

      if (isAnimationLaunched) {
        if (!isAnimated && isAnimationFinished)
          setAnimation(`animation-opacity`)
        if (!isAnimationFinished)
          setAnimation(`animation-fold-${index}`)
      }
      else
        setAnimation("")

    }, [isAnimationLaunched, isAnimationFinished, isAnimated]
  )

  return (
    <div
      className={`main-cube c${index}-top ${animation}`}
      onAnimationEnd={e => swapAnimation()}
    >
      {sayMyName()}
    </div>
  );
};

export default MiddleCubeTop;