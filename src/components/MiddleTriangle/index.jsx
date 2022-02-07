import React, { useRef } from 'react';

const MiddleTriangle = ({ index, isAnimated, isAnimationFinished, size }) => {

  const [animation, setAnimation] = React.useState("")
  const [triangleStyle, setTriangleStyle] = React.useState(null)


  React.useEffect(
    () => {
      if (isAnimated && isAnimationFinished)
        setAnimation(`animation-flower-t${index}`)
      else
        setAnimation('')
      return;
    }, [isAnimated, isAnimationFinished]
  )

  React.useEffect(
    () => {

      return;
    }, []
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