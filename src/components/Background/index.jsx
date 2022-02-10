import React from 'react';
import Col from './Col';
import Line from './Line';

const Background = ({ displayWelcomeAnimation, setDisplayWelcomeAnimation }) => {

  const [bgSize, setBgSize] = React.useState(null)
  const [linesNumber, setLinesNumber] = React.useState(10)

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

  return (
    <div className='Background' >

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
          {Array.from({ length: linesNumber }).map((n, i) => (
            <Line
              key={i} i={i}
              linesNumber={linesNumber}
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

          {Array.from({ length: linesNumber }).map((n, i) => (
            <Col
              key={i} i={i}
              linesNumber={linesNumber}
              bgSize={bgSize}
              displayWelcomeAnimation={displayWelcomeAnimation}
              setDisplayWelcomeAnimation={setDisplayWelcomeAnimation}
            />
          ))}
        </div>
      }


    </div>
  );
};

export default Background;