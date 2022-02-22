import React from 'react';

const Skills = () => {

  return (
    <div className='Skills'>

      <div className='skills-title'>
        <h2>Compétences</h2>
        <div className='bar2' />
        <div className='bar' />
      </div>

      <div className='skills-list'>

        <div className='skills-card'>
          <h3>Frontend</h3>
          <ul>
            <h4>Languages</h4>
            <li>HTML5 <i className="fa-brands fa-html5"></i></li>
            <li>CSS3 <i className="fa-brands fa-css3-alt"></i></li>
            <li>SCSS <i className="fa-brands fa-sass"></i></li>
            <li>JavaScript - AJAX - JSX <i className="fa-brands fa-js"></i></li>

            <h4>Frameworks</h4>
            <li>React - Redux<i className="fa-brands fa-react"></i></li>
            <li>Bootstrap - MUI<i className="fa-brands fa-bootstrap"></i></li>
          </ul>
        </div>

        <div className='skills-card'>
          <h3>Backend</h3>
          <ul>
            <h4>Languages</h4>
            <li>Ruby <i className="fa-regular fa-gem"></i></li>
            <li>JavaScript - AJAX - JSX <i className="fa-brands fa-js"></i></li>
            <li>SQL <i className="fa-solid fa-database"></i></li>

            <h4>Frameworks</h4>
            <li>Ruby On Rails <i className="fa-regular fa-gem"></i></li>
            <li>PostgreSQL - SQLite  <i className="fa-solid fa-database"></i></li>
          </ul>
        </div>

        <div className='skills-card'>
          <h3>Informatique</h3>
          <ul>
            <h4>Architecture Logicielle</h4>
            <li>POO - MVC</li>
            <li>Méthode Agile</li>
            <h4>Gestion de Projets</h4>
            <li>Git - GitHub</li>
            <li>Trello</li>
            <li>Wireframes</li>
            <li>Parcours Utilisateurs</li>
            <li>Schémas Relationnels (BDD)</li>
            <h4>Création - Utilisation d'API REST</h4>
            <h4>Design - Intégration</h4>
            <h4>Deploiement</h4>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;