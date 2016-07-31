/**
 * Created by Frank on 2016/7/29.
 */
(function (angular) {
  'use strict'
  angular.module('myMovie.movie_list', ['ngRoute', 'myMovie.jsonp'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/:movieType/:page?', {
        templateUrl: './movie_list/view.html',
        controller: 'movie_listController'
      })
    }])
    .controller('movie_listController', ['$scope', '$http', '$route', '$routeParams', '$window', 'jsonpService',
      function ($scope, $http, $route, $routeParams, $window, jsonpService) {
        //loading状态
        $scope.loading = false;
        //设置页码
        var page = ($routeParams.page || '1') - 0;
        $scope.page = page;
        var start = (page - 1) * 10;
        //调用函数实现跨域访问获取数据
        jsonpService.myJsonp('http://api.douban.com/v2/movie/' + $routeParams.movieType + '?q=' + $routeParams.q, {
            start: start,
            count: 10
          },
          function (data) {
            $scope.data = data;
            //总数量
            $scope.total = data.total;
            //总页数
            $scope.totalPage = $window.Math.ceil($scope.total / data.count);
            //loading状态消失
            $scope.loading = true;
            //通知angular 异步的数据改变了
            $scope.$apply();
          });
        //单击下一页
        $scope.getPage = function (nowPage) {
          if (nowPage < 1 || nowPage > $scope.totalPage) return;

          // 这里我们需要注入$route,它有个方法，updataParams用来更新url中锚点的参数，
          // 一旦改变，就会重新匹配规则。
          $route.updateParams({page: nowPage});
        };


        // $http.get('./in_theaters/in_theaters.json').then(function (response) {
        //   $scope.data = response.data
        // })

        // angular的jsonp跨域,不是说angular是jsonp方法有问题，只是豆瓣不支持这种有.的形式。
        // $http.jsonp('http://api.douban.com/v2/movie/in_theaters?callback=JSON_CALLBACK')
        // .then(function(data){})
      }
    ]);
})(angular);
