import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';
import moment from 'moment';
import { projects } from './data';

import githubLogo from './img/icons/github-icon.svg';
import stackshareLogo from './img/icons/stackshare-icon.svg';
import npmLogo from './img/icons/npm-icon.svg';
import dataxplorerLogo from './img/dataxplorer-logo.png';
import timetLogo from './img/timet-logo.png';
import cciLogo from './img/cci-logo.png';
import renePerrinLogo from './img/lycee-rene-perrin-logo.png';
import iutLogo from './img/iut-logo.jpeg';

import './App.css';
import './timeline.css';

class App extends Component {
  render() {
    const birthday = new Date(1995, 1, 24); // Hardcoded birthday date \o/
    const age = moment().diff(birthday, 'years', false);

    return (
      <div className="App">
        <Headroom style={{ zIndex: 200, backgroundColor: '#222' }}>
          <nav className="App-nav">
            <ul className="App-nav__list">
              <li className="App-nav__link">
                <Link activeClass="App-nav__link--active" to="curriculum" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                  Mon parcours
                </Link>
              </li>
              <li className="App-nav__link">
                <Link activeClass="App-nav__link--active" to="projects" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                  Mes projets
                </Link>
              </li>
              <li className="App-nav__link">
                <Link activeClass="App-nav__link--active" to="stack" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                Mes outils
                </Link>
              </li>
              <li className="App-nav__link">
                <Link activeClass="App-nav__link--active" to="contact" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </Headroom>

        <header className="App-header App-section">
          <div className="container">
            <div id="description" className="row">
              <div className="col-sm-5 col-md-4 col-lg-3">
                <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="fr_FR" data-type="vertical" data-theme="dark" data-vanity="nicolascoutin">
                  <a className="LI-simple-link" href='https://fr.linkedin.com/in/nicolascoutin?trk=profile-badge'>Nicolas Coutin</a>
                </div>
              </div>
              <div className="App-description col-sm-7 col-md-8 col-lg-9">
                <div className="">
                  <p>
                    Je m'appelle Nicolas, j'ai {age} ans.
                  </p>
                  <p>
                    J'ai appris à manier JavaScript majoritairement en autodidacte.
                    Féru de développement, j'aime découvrir et apprendre de nouvelles technologies, créer de nouveaux projets persos...
                    Je cherche toujours à m'améliorer.
                    La volonté d'évoluer est pour moi un atout primordial pour un bon développeur.
                  </p>
                  <p>
                    Je m'intéresse au Front end (React, +/- Angular), mais aussi beaucoup au Back end (Node.js), ainsi qu'à l'administration système (sur Ubuntu/Debian), au domaine DevOps et beaucoup à l'open source.
                  </p>
                  <small>
                    <i>"Javascript enthusiat pushing buttons for a living."</i>
                  </small>
                </div>
              </div>
            </div>
            <div id="social-buttons" className="row">
              <a href="https://github.com/Ilshidur" className="App-social-icon">
                <img src={githubLogo} alt="GitHub" className="App-social-icon__image App-social-icon__image--GitHub" />
              </a>
              <a href="https://stackshare.io/Ilshidur/personal-stack" className="App-social-icon">
                <img src={stackshareLogo} alt="Stackshare" className="App-social-icon__image" />
              </a>
              <a href="https://www.npmjs.com/~ilshidur" className="App-social-icon">
                <img src={npmLogo} alt="npm" className="App-social-icon__image" />
              </a>
            </div>
          </div>
        </header>

        <div id="curriculum" className="App-section">
          <div className="container">
            <div className="page-header">
              <h1 id="timeline">Mon parcours professionnel</h1>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-briefcase"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Développeur front end</h4>
                    <p><i>CDI</i> (59200, Tourcoing)</p>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Novembre 2016 - toujours en poste</small></p>
                  </div>
                  <div className="timeline-body">
                    <p>
                      <a href="https://dataxplorer.fr" target="blank" rel="noopener">
                        <img src={dataxplorerLogo} alt="DataXplorer" className="App-company-logo" />
                      </a>
                    </p>
                    <ul>
                      <li>3 mois de développement et de maintenance du site <a href="https://www.rapid-flyer.com">Rapid Flyer</a></li>
                      <li>Développement d'interfaces d'analyse de données et de data mining</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-badge success"><i className="glyphicon glyphicon-briefcase"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Développeur .NET</h4>
                    <p><i>Stage + alternance + CDD</i> (73400, Ugine)</p>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Avril 2014 - Décembre 2015</small></p>
                  </div>
                  <div className="timeline-body">
                    <p>
                      <a href="http://www.timet.com" target="blank" rel="noopener">
                        <img src={timetLogo} alt="TIMET Savoie" className="App-company-logo" />
                      </a>
                    </p>
                    <ul>
                      <li>Développement d'un logiciel d'aide à l'optimisation/déçision</li>
                      <li>Développement d'un MES (Manufacturing Execution System)</li>
                    </ul>
                    <p>Stage de 2 mois, apprentissage de 1 an puis CDD de 6 mois</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge danger"><i className="glyphicon glyphicon-education"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">License Pro. <i>DIM</i></h4>
                    <p><i>Bac +3</i> (74000, Annecy)</p>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Septembre 2014 - Juin 2015</small></p>
                  </div>
                  <div className="timeline-body">
                    <a href="http://www.formation-cci.fr/formations-diplomantes-en-alternance/nos-formations-en-alternance/digital/4-licence-professionnelle-developpeur-informatique-multisupports-dim">
                      <img src={cciLogo} alt="CCI Formation Multimédia" className="App-company-logo" />
                    </a>
                    <p>
                      Licence professionnelle <i>Développeur Informatique Multisupports</i>
                    </p>
                    <ul>
                      <li>Alternance d'une année chez TIMET Savoie</li>
                      <li>Programmation Web et mobile : Java, C, Javascript + Node.js, HTML5, CSS3, PHP + Symfony, MySQL, Postgres...</li>
                      <li>Algorithmie, UML, bases de données, sécurité</li>
                      <li>Communication, gestion de projets</li>
                      <li>Anglais</li>
                      <li>Projet collectif de fin d'année</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
              <div className="timeline-badge info"><i className="glyphicon glyphicon-education"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">DUT Informatique</h4>
                    <p><i>Bac +2</i> (74940, Annecy-le-Vieux / Université de Savoie)</p>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Septembre 2012 - Mars 2014</small></p>
                  </div>
                  <div className="timeline-body">
                    <a href="https://www.iut-acy.univ-smb.fr/departement_info/le_departement_info">
                      <img src={iutLogo} alt="IUT Annecy"/>
                    </a>
                    <ul>
                      <li>Algorithmie, programmation, réseaux</li>
                      <li>Bases de données, sécurité</li>
                      <li>Communication, gestion de projets</li>
                      <li>Mathématiques, anglais</li>
                      <li>Projet tutoré</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-education"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="timeline-title">Bac. STI Génie Électronique</h4>
                    <p>(73400, Ugine)</p>
                    <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> Septembre 2009 - Juin 2012</small></p>
                  </div>
                  <div className="timeline-body">
                    <a href="http://rene-perrin.elycee.rhonealpes.fr">
                      <img src={renePerrinLogo} alt="Lycée René Perrin" className="App-company-logo" />
                    </a>
                    <ul>
                      <li>Programmation C, Basic</li>
                      <li>Architecture matérielle, électronique, mécanique</li>
                      <li>Mathématiques, anglais</li>
                    </ul>
                    <span className="text-center">
                      Mention Bien.
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div id="projects" className="App-section">
          <h1>Mes projets</h1>
          <div className="App-projects row">
            {projects.filter(project => project.show).map((project, index) =>
              <div key={index} className="App-project col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <img className="App-project__preview img-responsive" src={project.img} alt={project.name} />
                <a href={project.img} className="App-project__link">
                    <div className="App-project__box">
                        <h2 className="App-project__name">{project.name}</h2>
                        <p>{project.summary}</p>
                        <i className="fa fa-plus-circle"></i>
                    </div>
                </a>
              </div>
            )}
          </div>
        </div>

        <div id="stack" className="App-section">
          <h1>Mes outils du quotidien</h1>
          <div className="container">
            <div className="App-stack">
              <a frameBorder="0" data-theme="dark" data-stack-embed="true" data-layers="1,2,3,4" href="https://embed.stackshare.io/stacks/embed/654e809fa0b6235b129efd854398a8">My stack</a>
            </div>
          </div>
        </div>

        <div id="contact" className="App-section">
          <h1>Contact</h1>
          <p className="text-center">Section à venir ...</p>
          <p className="text-center">En attendant, vous pouvez me contacter sur mon addresse : <i>nicolas-coutin [at] outlook [dot] com</i>.</p>
        </div>
      </div>
    );
  }
}

export default App;
