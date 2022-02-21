import React from 'react';

const MiddleTriangle = ({ index, size, isAnimated }) => {

  const [animation, setAnimation] = React.useState("")


  React.useEffect(
    () => {
      if (isAnimated && animation === "")
        setAnimation(`animation-flower-t${index}`)
      return;
      //eslint-disable-next-line
    }, [isAnimated]
  )


  return (
    <div
      className={`middle-triangle t${index} ${animation}`}
      style={{
        borderTop: `${size}px solid transparent`,
        borderBottom: `${size}px solid transparent`,
        borderLeft: `${size}px solid rgba(212, 101, 57, 0.8)`
      }}
    >
    </div>
  );
};

export default MiddleTriangle;