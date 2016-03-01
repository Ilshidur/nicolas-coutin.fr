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
      previewLink: '/assets/images/preview_portfolio.jpg',
      link: 'https://www.nicolas-coutin.fr',
      tags: ['web', 'node.js', 'angular 1.4'],
      description: 'Un simple portfolio contruit grâce au générateur [Angular Fullstack](https://github.com/DaftMonk/generator-angular-fullstack).  \nIl a pour simple but de présenter mes compétences, mon parcours professionnel et mon [blog](/blog).  \nHébergé sur serveur dédié.',
      date: 'Janvier 2016 - 1 mois',
      source: '[https://github.com/Ilshidur/nicolas-coutin.fr](https://github.com/Ilshidur/nicolas-coutin.fr)',
      show: true
    }, {
      name: 'Blog personnel',
      previewLink: '/assets/images/preview_blog.jpg',
      link: 'https://blog.nicolas-coutin.fr',
      tags: ['web', 'node.js', 'react 0.14'],
      description: 'Une application web monopage où sont publiés tutoriels et discussions.  \nHébergé sur serveur dédié.',
      date: 'Janvier 2016 - 1 mois',
      source: '[https://github.com/Ilshidur/blog.nicolas-coutin.fr](https://github.com/Ilshidur/blog.nicolas-coutin.fr)',
      show: true
    }, {
      name: 'LoL item sets',
      previewLink: '/assets/images/preview_lisg.jpg',
      link: 'http://lol-item-sets-generator.org',
      tags: ['web', 'PHP', 'jQuery 1.10.2', 'C#', 'WinForms'],
      description: 'Un outil de statistiques sur le jeu vidéo *League of Legends*. Il propose de télécharger des contenus générés depuis une API RESTful (Riot Games). Ces contenus sont utilisables dans le jeu.  \nUne application permet de mettre à jour ces données automatiquement.',
      date: 'Mars 2015',
      source: '* site : **privée**  \n* générateur : **privée**  \n* application : [https://github.com/Ilshidur/LoL-item-sets](https://github.com/Ilshidur/LoL-item-sets)',
      show: true
    }, {
      name: 'MJo Peintures',
      previewLink: '/assets/images/preview_mjopeintures.jpg',
      link: 'https://mjo-peintures.fr',
      tags: ['web', 'node.js', 'meteor', 'bootstrap 3.3.6'],
      description: 'Une application monopage d\exposition de peintures.  \nHébergé sur serveur dédié.',
      date: 'Février 2016 - 1 mois',
      source: '[https://github.com/Ilshidur/mjo-peintures.fr](https://github.com/Ilshidur/mjo-peintures.fr)',
      show: false
    });
  });
