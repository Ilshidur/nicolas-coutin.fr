import React, { Component } from 'react';
import moment from 'moment';
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
    const birthday = new Date(1995, 1, 24);
    const age = moment().diff(birthday, 'years', false);

    return (
      <div className="App">
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
          <div class="container">
            <div class="page-header">
              <h1 id="timeline">Mon parcours professionnel</h1>
            </div>
            <ul class="timeline">
              <li>
                <div class="timeline-badge warning"><i class="glyphicon glyphicon-briefcase"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Développeur front end</h4>
                    <p><i>CDI</i> (59200, Tourcoing)</p>
                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> Novembre 2016 - toujours en poste</small></p>
                  </div>
                  <div class="timeline-body">
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
              <li class="timeline-inverted">
                <div class="timeline-badge success"><i class="glyphicon glyphicon-briefcase"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Développeur .NET</h4>
                    <p><i>Stage + alternance + CDD</i> (73400, Ugine)</p>
                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> Avril 2014 - Décembre 2015</small></p>
                  </div>
                  <div class="timeline-body">
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
                <div class="timeline-badge danger"><i class="glyphicon glyphicon-education"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">License Pro. <i>DIM</i></h4>
                    <p><i>Bac +3</i> (74000, Annecy)</p>
                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> Septembre 2014 - Juin 2015</small></p>
                  </div>
                  <div class="timeline-body">
                    <a href="http://www.formation-cci.fr/formations-diplomantes-en-alternance/nos-formations-en-alternance/digital/4-licence-professionnelle-developpeur-informatique-multisupports-dim">
                      <img src={cciLogo} alt="CCI Formation Multimédia" className="App-company-logo" />
                    </a>
                    <p>
                      Licence professionnelle <i>Développeur Informatique Multisupports</i>
                    </p>
                    <ul>
                      <li>Alternance d'une année chez TIMET Savoie</li>
                      <li>Programmation Web et mobile : Java, C, Javascript + Node.js, HTML5, CSS3, PHP + Symfony, MySQL, Postgres...</li>
                      <li>Algorythmie, UML, bases de données, sécurité</li>
                      <li>Communication, gestion de projets</li>
                      <li>Projet collectif de fin d'année</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
              <div class="timeline-badge info"><i class="glyphicon glyphicon-education"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">DUT Informatique</h4>
                    <p><i>Bac +2</i> (74940, Annecy-le-Vieux / Université de Savoie)</p>
                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> Septembre 2012 - Mars 2014</small></p>
                  </div>
                  <div class="timeline-body">
                    <a href="https://www.iut-acy.univ-smb.fr/departement_info/le_departement_info">
                      <img src={iutLogo} alt="IUT Annecy"/>
                    </a>
                    <ul>
                      <li>To do</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-badge warning"><i class="glyphicon glyphicon-education"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Bac. STI Génie Électronique</h4>
                    <p>(73400, Ugine)</p>
                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> Septembre 2009 - Juin 2012</small></p>
                  </div>
                  <div class="timeline-body">
                    <a href="http://rene-perrin.elycee.rhonealpes.fr">
                      <img src={renePerrinLogo} alt="Lycée René Perrin" className="App-company-logo" />
                    </a>
                    <ul>
                      <li>To do</li>
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
        </div>

        <div id="stack" className="App-section">
          <h1>Mes outils du quotidien</h1>
          <div className="container">
            <div className="App-stack">
              <a frameborder="0" data-theme="dark" data-stack-embed="true" data-layers="1,2,3,4" href="https://embed.stackshare.io/stacks/embed/654e809fa0b6235b129efd854398a8">My stack</a>
            </div>
          </div>
        </div>

        <div id="contact" className="App-section">
          <h1>Contact</h1>
        </div>
      </div>
    );
  }
}

export default App;
