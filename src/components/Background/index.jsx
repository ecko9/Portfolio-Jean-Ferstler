import React from 'react';
import BackgroundCols from './BackgroundCols';
import BackgroundLines from './BackgroundLines';

const Background = ({ displayWelcomeAnimation, setDisplayWelcomeAnimation }) => {

  const [bgSize, setBgSize] = React.useState(null)
  const linesNumber = 10

  React.useEffect(
    () => {
      const determineBgSize = () => {
        let hypothenuse = Math.floor(Math.pow(Math.floor(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)), 0.5))
        setBgSize(hypothenuse)
      }

      determineBgSize()
      return;
    }, []
  )

  return (
    <div className='Background' >

      {bgSize !== null &&
        <BackgroundLines
          bgSize={bgSize} linesNumber={linesNumber} />
      }

      {bgSize !== null &&
        <BackgroundCols
          bgSize={bgSize} linesNumber={linesNumber}
          displayWelcomeAnimation={displayWelcomeAnimation}
          setDisplayWelcomeAnimation={setDisplayWelcomeAnimation}
        />
      }

    </div>
  );
};

export default Background;