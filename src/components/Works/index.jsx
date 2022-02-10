import React from 'react';

const Works = () => {

  const [worksIndex, setWorksIndex] = React.useState(0)
  const works = [
    {
      name: "PlayBox",
      description: "PlayBox est une de mes premières réalisations en équipe. Nous avons réalisé ce projet de site de location de Jeux de Société en deux semaines, dans le cadre de notre formation, ce qui fut une expérience très intense et enrichissante !",
      image: ""
    },
    {
      name: "Jessica Lyfoung",
      description: "Ce portfolio de photographe à été mon premier projet suite à ma formation de développeur web. J'ai pu grandement développer mes compétences en matière de design et d'expérience utilisateur ainsi que dans la relation client (besoins / attentes / contraintes ...).",
      image: ""
    }
  ]

  return (
    <div className='Works'>
      <div className='WorksIndex'>
        {worksIndex > 0 &&
          <div className='prev' onClick={e => setWorksIndex(worksIndex - 1)}>{`0${worksIndex - 1}`}</div>
        }
        <div className='work-index'>{`0${worksIndex}`}</div>

        {worksIndex < (works.length - 1) &&
          <div className='next' onClick={e => setWorksIndex(worksIndex + 1)}>{`0${worksIndex + 1}`}</div>
        }
      </div>

      <div className='WorksPresentation'>
        <div className='work-presentation'>
          <div className='work-image'>
          </div>

          <div className='work-description'>
            <h2>{works[worksIndex].name}</h2>
            <div className='bar' />
            <p>{works[worksIndex].description}</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Works;