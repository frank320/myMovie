/**
 * Created by Frank on 2016/7/29.
 */
(function (angular) {
  angular.module('myMovie.home_page', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/home_page', {
          templateUrl: './home_page/view.html',
          controller: 'home_pageController'
        })
        .otherwise({
          redirectTo: '/home_page'
        });
    }])
    .controller('home_pageController', ['$scope', function ($scope) {
      //
    }]);
})(angular);