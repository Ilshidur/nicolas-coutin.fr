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
      tags: ['PHP', 'jQuery 1.10.2', 'C#', 'WinForms'],
      description: 'Un outil de statistiques sur le jeu vidéo *League of Legends*. Il propose de télécharger des contenus générés depuis une [API RESTful](https://developer.riotgames.com/api/methods) (Riot Games). Ces contenus sont utilisables dans le jeu.  \nUne application permet de mettre à jour ces données automatiquement.',
      iconLink: '/assets/images/projects/favicon_lisg.ico',
      date: 'Mars 2015',
      source: '* site : **privée**  \n* générateur : **privée**  \n* application : [https://github.com/Ilshidur/LoL-item-sets](https://github.com/Ilshidur/LoL-item-sets)',
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
    });
  });

// Javascript
// Node.JS
// Meteor.JS
// Angular, React, jQuery
// HTML5, CSS3, SCSS,
// Bootstrap

Skill.find({}).removeAsync()
  .then(function () {
    Skill.createAsync({
      type: '',
      list: [{
        skills: [{
          name: '',
          img_url: ''
        }],
        percentage: 100
      }, {
        skills: [{
          name: '',
          img_url: ''
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
      type: 'Javascript',
      list: [{
        skills: [{
          name: 'Vanilla',
          img_url: '/assets/images/icons/javascript.png'
        }],
        percentage: 90
      }, {
        skills: [{
          name: 'Node.JS',
          img_url: '/assets/images/icons/nodejs.png'
        }],
        percentage: 90
      }]
    }, {
      type: 'Autre',
      list: [{
        skills: [{
          name: 'PHP',
          img_url: '/assets/images/icons/php.png'
        }],
        percentage: 70
      }]
    });
  });

Employment.find({}).removeAsync().then(function () {
  Employment.createAsync({
    title: 'Développeur .NET',
    date: 'Juillet 2014 - Décembre 2015',
    place: 'TIMET Savoie (Ugine, 73400)',
    description: `* Développement d'un logiciel d'aide à l'optimisation/déçision  \n* Développement d'un MES (Manufacturing Execution System) dans une entreprise de production de titane  \nStage de 2 mois, apprentissage de 1 an puis CDD de 6 mois.`,
    tags: ['VB .NET', 'WinForms', 'SQL Server', 'Visual Studio', 'Linq', 'Unit tests', 'MVC']
  }, {
    title: 'Développeur Android',
    date: 'Avril 2015 - Juin 2015',
    place: 'IUT d\'Annecy (74000)',
    description: `Développement d'une interface graphique en Java pour un jeu Android lors d'un project tuteuré (équipe de 5).`,
    tags: ['Java', 'Android', 'eclipse']
  });
});
