/**
 * Created by Frank .
 */
(function (angular) {
  'use strict';
  angular.module('myMovie', [ 'myMovie.home_page','myMovie.details', 'myMovie.movie_list', 'myMovie.auto-active', 'myMovie.jsonp', 'ngRoute'])
    .controller('searchController', ['$scope', '$route', function ($scope, $route) {
      //电影搜索功能的实现
      $scope.search = function () {
        //改变url的值   $route的使用必须依赖模块ngRoute
        // 这里我们需要注入$route,它有个方法，updataParams用来更新url中锚点的参数，
        //若对象中包含路由中未设置的参数名 则自动变为请求内容?q=$scope.query
        // 一旦改变，就会重新匹配规则。
        $route.updateParams({
          movieType: 'search',
          q: $scope.query
        });
      };
    }]);
})(angular);
