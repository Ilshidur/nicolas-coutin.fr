'use strict';

class NavbarController {
    //start-non-standard
    menu = [
        {
            'title': 'Mes projets',
            'state': 'projects',
            'clientRoute': true
        }, {
            'title': 'CV',
            'state': 'cv',
            'clientRoute': true
        }, {
            'title': 'Blog',
            'state': 'blog',
            'clientRoute': false
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
