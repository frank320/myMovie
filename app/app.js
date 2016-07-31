/**
 * Created by Frank on 2016/7/29.
 */
(function (angular) {
  'use strict';
  angular.module('myMovie', ['myMovie.home_page', 'myMovie.details', 'myMovie.movie_list', 'myMovie.auto-active', 'ngRoute'])
    .controller('searchController', ['$scope', '$route', function ($scope, $route) {
      $scope.search = function () {
        //改变url的值   $route的使用必须依赖模块ngRoute
        // 这里我们需要注入$route,它有个方法，updataParams用来更新url中锚点的参数，
        //若对象中包含路由中未设置的参数名 则自动变为请求内容?q=$scope.query&m=test
        // 一旦改变，就会重新匹配规则。
        $route.updateParams({
          movieType: 'search',
          q: $scope.query,
          m: 'test' //just for test
        });
      };
    }]);
})(angular);
