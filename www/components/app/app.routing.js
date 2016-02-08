angular.module('starter').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'components/menu/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'components/dashboard/dashboard.html'
      }
    }
  })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'components/profile/profile.html'
      }
    }
  })
  .state('app.products', {
    url: '/products',
    views: {
      'menuContent': {
        templateUrl: 'components/products/products.html'
      }
    }
  })
  .state('app.reporting', {
    url: '/reporting',
    views: {
      'menuContent': {
        templateUrl: 'components/reporting/reporting.html',
        controller: 'ReportingController',
        controllerAs: 'vm'
      },
      'sales-history@app.reporting': {
        templateUrl: 'components/reporting/views/sales-history.html',
      },
      'downstream@app.reporting': {
        templateUrl: 'components/reporting/views/downstream.html',
      },
      'progress@app.reporting': {
        templateUrl: 'components/reporting/views/progress.html',
      },
      'recent-sales@app.reporting': {
        templateUrl: 'components/reporting/views/recent-sales.html',
      },

    }
  });
  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })
  // .state('app.browse', {
  //     url: '/browse',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/browse.html'
  //       }
  //     }
  //   })
  //   .state('app.playlists', {
  //     url: '/playlists',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/playlists.html',
  //         controller: 'PlaylistsCtrl'
  //       }
  //     }
  //   })
  //
  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});
