import react from 'react';
import React from 'react';

const MiddleCubeTop = ({ index, isAnimated }) => {

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
      if (isAnimated && animation === "")
        setAnimation(`animation-fold-${index}`)
      // eslint-disable-next-line
    }, [isAnimated]
  )

  return (
    <div
      className={`middle-cube-top c${index}-top ${animation}`}
    >
      {sayMyName()}
    </div>
  );
};

export default MiddleCubeTop;