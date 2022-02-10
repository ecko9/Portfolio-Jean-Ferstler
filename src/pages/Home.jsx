import React from 'react';
import Background from '../components/Background';
import Content from '../components/Content';

const Home = () => {

  const [displayWelcomeAnimation, setDisplayWelcomeAnimation] = React.useState(true)

  return (
    <div className='Home'>
      <Background
        displayWelcomeAnimation={displayWelcomeAnimation}
        setDisplayWelcomeAnimation={setDisplayWelcomeAnimation}
      />
      {!displayWelcomeAnimation &&
        <Content />
      }
    </div>
  );
};

export default Home;