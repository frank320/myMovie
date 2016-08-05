/**
 * Created by Frank.
 */
(function (angular) {
  'use strict';
  angular.module('myMovie.details', ['ngRoute', 'myMovie.jsonp'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/details/:id', {
        templateUrl: './details/view.html',
        controller: 'detailsController'
      });
    }])
    .controller('detailsController',
      ['$scope', '$routeParams', 'jsonpService',
        function ($scope, $routeParams, $jsonpService) {
          //跨域请求
          $jsonpService.myJsonp('http://api.douban.com/v2/movie/subject/' + $routeParams.id, null,
            function (data) {
              $scope.data = data;
              //异步获取的数据要通知angular更新
              $scope.$apply();
            })
        }]);
})(angular);
