'use strict';

class NavbarController {
    //start-non-standard
    menu = [
        {
            'title': 'Accueil',
            'state': 'main'
        }, {
            'title': 'Blog',
            'state': 'blog'
        }, {
            'title': 'Mes projets',
            'state': 'projects'
        }
    ];

    isCollapsed = true;
    //end-non-standard

    constructor(Auth) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
    }
}

angular.module('nicolasCoutinFrApp')
  .controller('NavbarController', NavbarController);
