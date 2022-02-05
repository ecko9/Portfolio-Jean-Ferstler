import React from 'react';
import Col from '../Col';
import Line from '../Line';

const Welcome = () => {

  const [bgSize, setBgSize] = React.useState(null)


  React.useEffect(
    () => {
      const determineBgSize = () => {
        let hypothenuse = Math.floor(Math.pow(Math.floor(Math.pow(window.screen.width, 2) + Math.pow(window.screen.height, 2)), 0.5))
        setBgSize(hypothenuse)
      }

      determineBgSize()
      return;
    }, []
  )

  const isAnimated = (index) => {
    if (index === 4)
      return false
    else
      return true
  }

  const isMiddleCube = (index1, index2) => {
    if (!isAnimated(index1) && !isAnimated(index2))
      return true
    else
      return false
  }

  return (
    <div className='Welcome' >

      {bgSize !== null &&
        <div
          className='bg-lines'
          style={{
            width: `${bgSize}px`,
            height: `${bgSize}px`,
            top: `-${Math.floor((bgSize - window.screen.height) / 2)}px`,
            left: `-${Math.floor((bgSize - window.screen.width) / 2)}px`
          }}
        >
          {Array.from({ length: 9 }).map((n, i) => (
            <Line
              key={i}
              isAnimated={isAnimated}
              isMiddleCube={isMiddleCube}
              i={i}
            />
          ))}

        </div>
      }

      {bgSize !== null &&
        <div
          className='bg-col '
          style={{
            width: `${bgSize}px`,
            height: `${bgSize}px`,
            top: `-${Math.floor((bgSize - window.screen.height) / 2)}px`,
            left: `-${Math.floor((bgSize - window.screen.width) / 2)}px`
          }}
        >

          {Array.from({ length: 9 }).map((n, i) => (
            <Col
              key={i}
              isAnimated={isAnimated}
              isMiddleCube={isMiddleCube}
              i={i}
            />
          ))}
        </div>
      }


    </div>
  );
};

export default Welcome;