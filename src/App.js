import React, { Component } from 'react';
import moment from 'moment';
import githubLogo from './img/icons/github-icon.svg';
import stackshareLogo from './img/icons/stackshare-icon.svg';
import npmLogo from './img/icons/npm-icon.svg';
import dataxplorerLogo from './img/dataxplorer-logo.png';
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
                    Féru de développement, j'aime découvrir et apprendre de nouvelles technologies, créer de nouveaux projets persos ...
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
                <img src={githubLogo} alt="GitHub" className="App-social-icon__image" />
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
                <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Développeur front end (CDI)</h4>
                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> Novembre 2016 - toujours en poste</small></p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      <img src={dataxplorerLogo} alt="DataXplorer" className="App-company-logo" />
                    </p>
                    <ul>
                      <li>3 mois de développement et de maintenance du site <a href="https://www.rapid-flyer.com">Rapid Flyer</a></li>
                      <li>développement d'interfaces d'analyse de données et de data mining</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                      Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                    <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere
                      pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-badge danger"><i class="glyphicon glyphicon-credit-card"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                      Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                      Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-badge info"><i class="glyphicon glyphicon-floppy-disk"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                      Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                    <hr />
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
                        <i class="glyphicon glyphicon-cog"></i> <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="">Action</a></li>
                        <li><a href="">Another action</a></li>
                        <li><a href="">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="">Separated link</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge success"><i class="glyphicon glyphicon-thumbs-up"></i></div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>
                  </div>
                  <div class="timeline-body">
                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                      Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
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
