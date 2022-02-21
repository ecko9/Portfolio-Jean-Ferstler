import React from 'react';

const Works = () => {

  const [worksIndex, setWorksIndex] = React.useState(0)
  const works = [
    {
      name: "Jessica Lyfoung",
      description: "Ce portfolio de photographe à été mon premier projet suite à ma formation de développeur web. J'ai pu grandement développer mes compétences en matière de design et d'expérience utilisateur ainsi que dans la relation client (besoins / attentes / contraintes ...).",
      image: "./PresentationPortfolioJessicaLyfoung.png",
      github: "https://github.com/ecko9/Portfolio-Photographe-Jessica-Lyfoung",
      website: "https://portfolio-jessica-lyfoung.herokuapp.com/"
    },
    {
      name: "PlayBox",
      description: "PlayBox est une de mes premières réalisations en équipe. Nous avons réalisé ce projet de site de location / achat de Jeux de Société en deux semaines, dans le cadre du second projet final de notre formation. Le site permet aux utilsateurs de se faire livrer à leur domicile des jeux qu'ils auront préalablement acheté ou loué sur la plateforme. La location est possible via différentes formules d'abonnement nous permettant de bénéficier de différentes quantités de jeux tout les mois. Nous avons utilisé Ruby on Rails pour créer une API avec une base de donnée (postgreSQL) nous permettant de communiquer avec notre application React. Cette application est également une PWA, ce qui nous permet de télécharger l'application pour améliorer les performances et être accessible hors ligne.",
      image: "./playbox-cover.png",
      github: "https://github.com/ecko9/THP_Project_final_front",
      website: "https://playbox-thp.herokuapp.com/"
    },
    {
      name: "Cookadom",
      description: "Cookadom est ma première réalisation en équipe. Nous avons réalisé cette Marketplace réunissant cuisiniers indépendants et particuliers en deux semaines, dans le cadre de notre premier projet final de formation. Il est donc possible pour les partculiers de connaitre les cuisiniers proposants differentes cartes culinaires autour d'eux et de pouvoir leur commander différents plats. Le cuisinier dispose quant à lui un dashboard de gestion de ses plats, commandes et livraisons. Nous avons également mis en place un système de favoris, commentaires, notations, notifications ainsi q'une messagerie pour améliorer les interactions entre utilisateurs. Ce fut une première expérience en équipe intense et enrichissante apres 3 mois d'apprentissage de Ruby on Rails qui l'ont été tout autant!",
      image: "./cookadom-cover.png",
      github: "https://github.com/ecko9/THP_Cookadom",
      website: "https://cookadom.herokuapp.com/"
    }
  ]

  return (
    <div className='Works'>
      <div className='WorksIndex'>

        <div className='prev'>
          {worksIndex > 0 &&
            <p className='link ' onClick={e => setWorksIndex(worksIndex - 1)}>{`0${worksIndex}`}</p>
          }
        </div>

        <div className='work-index'><p className='link'>{`0${worksIndex + 1}`}</p></div>


        <div className='next'>
          {worksIndex < (works.length - 1) &&
            <p className='link' onClick={e => setWorksIndex(worksIndex + 1)}>{`0${worksIndex + 2}`}</p>
          }
        </div>

      </div>

      <div className='WorksPresentation'>
        <div className='work-presentation'>

          <div className='work-link' style={{ backgroundImage: `url(${works[worksIndex].image})` }}>
            <a href={`${works[worksIndex].website}`} ><i className="fa-solid fa-link fa-5x link"></i></a>
            <div className='bar' />
            <a href={`${works[worksIndex].github}`} ><i className="fa-brands fa-github fa-5x link"></i></a>
          </div>

          <div className='work-description'>
            <h2>{works[worksIndex].name}</h2>
            <div className='bar' />
            <p>{works[worksIndex].description}</p>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Works;