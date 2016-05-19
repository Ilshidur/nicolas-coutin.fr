/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 * By default : 'true' in dev mode.
 */

'use strict';
import User from '../api/user/user.model';
import Project from '../api/project/project.model';
import Otherproject from '../api/otherproject/otherproject.model';
import Skill from '../api/skill/skill.model';
import Employment from '../api/employment/employment.model';

// TODO: _IMPORTANT = Populate MongoDB database for production mode

User.find({}).removeAsync()
  .then(function () {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });

Project.find({}).removeAsync()
  .then(function () {
    Project.createAsync({
      name: 'Portfolio',
      previewLink: '/assets/images/projects/preview_portfolio.jpg',
      link: 'https://www.nicolas-coutin.fr',
      tags: ['node.js', 'angular 1.4'],
      description: 'Un simple portfolio contruit grâce au générateur [Angular Fullstack](https://github.com/DaftMonk/generator-angular-fullstack).  \nIl a pour simple but de présenter mes compétences, mon parcours professionnel et mon <a href="/blog" target="_self">blog</a>.  \nHébergé sur serveur dédié.',
      iconLink: '/assets/images/projects/favicon_portfolio.ico',
      date: 'Janvier 2016 - 2 mois',
      source: '[https://github.com/Ilshidur/nicolas-coutin.fr](https://github.com/Ilshidur/nicolas-coutin.fr)',
      show: true
    }, {
      name: 'Blog personnel',
      previewLink: '/assets/images/projects/preview_blog.jpg',
      link: 'https://blog.nicolas-coutin.fr',
      tags: ['node.js', 'react 0.14', 'flux'],
      description: 'Une application web monopage où sont publiés tutoriels et discussions.  \nHébergé sur serveur dédié.',
      iconLink: '/assets/images/projects/favicon_blog.ico',
      date: 'Janvier 2016 - 2 mois',
      source: '[https://github.com/Ilshidur/blog.nicolas-coutin.fr](https://github.com/Ilshidur/blog.nicolas-coutin.fr)',
      show: true
    }, {
      name: 'LoL item sets',
      previewLink: '/assets/images/projects/preview_lisg.jpg',
      link: 'https://lol-item-sets-generator.org/',
      tags: ['PHP', 'jQuery 1.10.2', 'C#', 'WinForms', 'node.js'],
      description: 'Un outil de statistiques sur le jeu vidéo *League of Legends*. Il propose de télécharger des contenus générés depuis une [API RESTful](https://developer.riotgames.com/api/methods) (Riot Games). Ces contenus sont utilisables dans le jeu.  \nUne application permet de mettre à jour ces données automatiquement.',
      iconLink: '/assets/images/projects/favicon_lisg.ico',
      date: 'Mars 2015',
      source: '* site : ***privée***  \n* générateur : ***privée***  \n* application : [https://github.com/Ilshidur/LoL-item-sets](https://github.com/Ilshidur/LoL-item-sets)',
      show: true
    }, {
      name: 'MJo Peintures',
      previewLink: '/assets/images/projects/preview_mjopeintures.jpg',
      link: 'https://mjo-peintures.fr',
      tags: ['node.js', 'meteor', 'bootstrap 3.3.6'],
      description: 'Une application monopage d\'exposition de peintures.  \nHébergé sur serveur dédié.',
      iconLink: '/assets/images/projects/favicon_mjopeintures.ico',
      date: 'Février 2016 - 2 mois',
      source: '[https://github.com/Ilshidur/mjo-peintures.fr](https://github.com/Ilshidur/mjo-peintures.fr)',
      show: false
    });
  });

Otherproject.find({}).removeAsync()
  .then(function () {
    Otherproject.createAsync({
      name: 'matchbaking',
      previewLink: '',
      link: '/matchbaking',
      tags: ['node.js', 'react', 'relay', 'socket.io'],
      description: 'Moteur de matchmaking en temps réel. Développement en cours ...',
      iconLink: '/assets/images/projects/favicon_matchbaking.ico',
      date: 'Mars 2016',
      source: '* serveur : [https://github.com/Ilshidur/matchbaking](https://github.com/Ilshidur/matchbaking)  \n* client : [https://github.com/Ilshidur/matchbaking-client](https://github.com/Ilshidur/matchbaking-client)',
      show: true
    }, {
      name: 'Hived',
      previewLink: '/assets/images/projects/preview_hived.jpg',
      link: '',
      tags: ['node.js', 'socket.io'],
      description: 'Serveur d’hébergement de jeux + librairie pour le multi-joueurs dans le cadre d\'un projet organisé par la CCI Formation Digital (en équipe de 3).  \n* Cible : développeurs de jeux  \n* Objectif :  \n  * offrir un hébergement de jeux aux développeurs (accessible par FTP)  \n  * abstraire la couche "communication" et "scalabilité" des jeux pour faciliter le développement avec des SDKs  \n  * offrir ces librairies sur plusieurs plateformes pour facilement étendre l\'influence des jeux  \n  * permettre aux joueurs de regarder en direct des parties sur leur navigateur (non implémenté)  \nChaque membre du projet travaillait sur une des trois parties : serveur/client Web, SDK Android et site Web.',
      iconLink: '',
      date: 'Avril 2015 - 3 mois',
      source: '***indisponible***',
      show: true
    }, {
      name: 'CSS-contest',
      previewLink: '/assets/images/projects/preview_css-contest.jpg',
      link: '/CSS-contest',
      tags: ['css3'],
      description: 'Mise en forme d\'un fichier HTML dans le cadre d\'un concours de l\'IUT d\'Annecy, avec récompenses selon le genre (vainqueur du "grand prix du qui-pique-les-yeux"). **Mise en garde** : contient des images et couleurs clignotant rapidement.',
      iconLink: '',
      date: '2013',
      source: '[https://github.com/Ilshidur/CSS-contest](https://github.com/Ilshidur/CSS-contest)',
      show: true
    });
  });

Skill.find({}).removeAsync()
  .then(function () {
    Skill.createAsync({
      type: 'Back End',
      list: [{
        skills: [{
          name: 'Node.js',
          img_url: '/assets/images/icons/nodejs.png'
        }],
        percentage: 90
      }, {
        skills: [{
          name: 'PHP',
          img_url: '/assets/images/icons/php.png'
        }],
        percentage: 50
      }, {
        skills: [{
          name: 'MySQL',
          img_url: '/assets/images/icons/mysql.png'
        }, {
          name: 'SQL Server',
          img_url: ''
        }, {
          name: 'MongoDB',
          img_url: '/assets/images/icons/mongodb.png'
        }],
        percentage: 80
      }]
    }, {
      type: 'Front End',
      list: [{
        skills: [{
          name: 'HTML 5',
          img_url: '/assets/images/icons/html5.png'
        }, {
          name: 'CSS 3',
          img_url: '/assets/images/icons/css3.png'
        }, {
          name: 'SCSS',
          img_url: '/assets/images/icons/sass.png'
        }, {
          name: 'Vanilla',
          img_url: '/assets/images/icons/javascript.png'
        }],
        percentage: 90
      }, {
        skills: [{
          name: 'Bootstrap',
          img_url: '/assets/images/icons/bootstrap.png'
        }],
        percentage: 75
      }, {
        skills: [{
          name: 'Angular',
          img_url: '/assets/images/icons/angular.png'
        }, {
          name: 'React',
          img_url: '/assets/images/icons/react.png'
        }, {
          name: 'jQuery',
          img_url: '/assets/images/icons/jquery.png'
        }],
        percentage: 75
      }]
    }, {
      type: 'Divers',
      list: [{
        skills: [{
          name: 'MERISE',
          img_url: ''
        }, {
          name: 'UML',
          img_url: '/assets/images/icons/uml.png'
        }],
        percentage: 95
      }, {
        skills: [{
          name: 'Atom',
          img_url: '/assets/images/icons/atom.png'
        }, {
          name: 'Visual Studio',
          img_url: '/assets/images/icons/visual-studio.png'
        }, {
          name: 'WebStorm',
          img_url: '/assets/images/icons/webstorm.png'
        }, {
          name: 'Sublime',
          img_url: ''
        }, {
          name: 'Eclipse',
          img_url: '/assets/images/icons/eclipse.png'
        }],
        percentage: 95
      }]
    }, {
      type: 'OS',
      list: [{
        skills: [{
          name: 'Windows',
          img_url: '/assets/images/icons/windows.png'
        }],
        percentage: 100
      }, {
        skills: [{
          name: 'Linux',
          img_url: '/assets/images/icons/linux.png'
        }],
        percentage: 80
      }, {
        skills: [{
          name: 'OS X',
          img_url: '/assets/images/icons/macosx.png'
        }],
        percentage: 70
      }]
    });
  });

Employment.find({}).removeAsync().then(function () {
  Employment.createAsync({
    title: 'Développeur .NET',
    date: 'Juillet 2014 - Décembre 2015',
    employer: 'TIMET Savoie (73400, Ugine)',
    employerLink: 'http://www.timet.com/',

    description: `* Développement d'un logiciel d'aide à l'optimisation/déçision  \n* Développement d'un MES (Manufacturing Execution System)  \nStage de 2 mois, apprentissage de 1 an puis CDD de 6 mois.`,
    tags: ['VB .NET', 'WinForms', 'SQL Server']
  }, {
    title: 'Développeur Back End',
    date: 'Avril 2015 - Juin 2015',
    employer: 'CCI Formation Digital (74000, Annecy)',
    employerLink: 'http://www.formation-cci.fr/formations-diplomantes-en-alternance/nos-formations-en-alternance/digital/4-licence-professionnelle-developpeur-informatique-multisupports-dim',
    description: `Serveur d’hébergement de jeux + librairie pour le multi-joueurs (équipe de 3).`,
    tags: ['Node.js', 'Socket.io', 'MySQL']
  }, {
    title: 'Développeur Android',
    date: 'Avril 2014 - Juin 2014',
    employer: 'IUT d\'Annecy (74940, Annecy-le-Vieux)',
    employerLink: 'https://www.iut-acy.univ-smb.fr/departement_info/le_departement_info/',
    description: `Développement d'une interface graphique en Java pour un jeu Android lors d'un project tuteuré (équipe de 5).`,
    tags: ['Java', 'Android', 'Eclipse']
  });
});
