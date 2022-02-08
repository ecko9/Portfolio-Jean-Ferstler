import react from 'react';
import React from 'react';

const MiddleCubeTop = ({ index, isAnimationLaunched, isAnimationFinished }) => {

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

  react.useEffect(
    () => {

      if (isAnimationLaunched) {

        if (!isAnimationFinished)
          setAnimation(`animation-fold-${index}`)
        else
          setAnimation('')
      }
      else
        if (isAnimationFinished)
          setAnimation(`animation-opacity`)
        else
          setAnimation("")

    }, [isAnimationLaunched, isAnimationFinished]
  )

  return (
    <div
      className={`main-cube c${index}-top ${animation}`}
    >
      {sayMyName()}
    </div>
  );
};

export default MiddleCubeTop;