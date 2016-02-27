/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 * By default : 'true' in dev mode.
 */

'use strict';
import User from '../api/user/user.model';
import Project from '../api/project/project.model';

User.find({}).removeAsync()
  .then(function() {
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
  .then(function() {
    Project.createAsync({
      name: 'Portfolio',
      previewLink: '/assets/img/preview_portfolio.jpg',
      link: 'https://www.nicolas-coutin.fr',
      tags: ['web', 'node.js', 'angular 1.4'],
      description: 'Un simple portfolio contruit grâce au générateur [Angular Fullstack](https://github.com/DaftMonk/generator-angular-fullstack).  \nIl a pour simple but de présenter mes compétences, mon parcours professionnel et mon [blog](/blog).  \nHébergé sur serveur dédié.',
      source: '[https://github.com/Ilshidur/nicolas-coutin.fr](https://github.com/Ilshidur/nicolas-coutin.fr)',
      show: true
    }, {
      name: 'Blog personnel',
      previewLink: '/assets/img/preview_blog.jpg',
      link: 'https://blog.nicolas-coutin.fr',
      tags: ['web', 'node.js', 'react 0.14'],
      description: 'Une application monopage .  \nHébergé sur serveur dédié.',
      source: '[https://github.com/Ilshidur/blog.nicolas-coutin.fr](https://github.com/Ilshidur/blog.nicolas-coutin.fr)',
      show: true
    }, {
      name: 'LoL item sets',
      previewLink: '/assets/img/preview_lisg.jpg',
      link: 'http://lol-item-sets-generator.org',
      tags: ['web', 'php', 'jquery 1.10.2'],
      description: 'Un outil de statistiques sur le jeu vidéo *League of Legends*. Il propose de télécharger des contenus générés depuis une API. Ces contenus sont utilisables dans le jeu.  \nUne application permet de mettre ces données à jour automatiquement.',
      source: '* site : **privée**  \n* application : [https://github.com/Ilshidur/LoL-item-sets](https://github.com/Ilshidur/LoL-item-sets)',
      show: true
    }, {
      name: 'MJo Peintures',
      previewLink: '/assets/img/preview_mjopeintures.jpg',
      link: 'https://mjo-peintures.fr',
      tags: ['web', 'node.js', 'meteor', 'bootstrap 3.3.6'],
      description: 'Une application monopage d\exposition de peintures.  \nHébergé sur serveur dédié.',
      source: '[https://github.com/Ilshidur/mjo-peintures.fr](https://github.com/Ilshidur/mjo-peintures.fr)',
      show: false
    });
  });
