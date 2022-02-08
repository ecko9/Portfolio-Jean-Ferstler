import React, { useRef } from 'react';

const MiddleTriangle = ({ index, isAnimationFinished, isAnimationLaunched, size }) => {

  const [animation, setAnimation] = React.useState("")


  React.useEffect(
    () => {

      if (isAnimationLaunched) {
        if (!isAnimationFinished)
          setAnimation(`animation-flower-t${index}`)
        else
          setAnimation('')
      }
      else
        if (isAnimationFinished)
          setAnimation(`animation-opacity-reverse`)
        else
          setAnimation('')

      return;
    }, [isAnimationFinished, isAnimationLaunched]
  )


  return (
    <div
      className={`middle-triangle t${index} ${animation}`}
      style={{
        borderTop: `${size}px solid transparent`,
        borderBottom: `${size}px solid transparent`,
        borderLeft: `${size}px solid red`
      }}
    >
    </div>
  );
};

export default MiddleTriangle;