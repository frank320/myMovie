/**
 * Created by Frank
 */
(function(angular) {
  angular.module('myMovie.home_page', ['ngRoute', 'myMovie.jsonp'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/home_page', {
          templateUrl: './home_page/view.html',
          controller: 'home_pageController'
        })
        .otherwise({
          redirectTo: '/home_page'
        })
    }])
    .controller('home_pageController', ['$scope', 'jsonpService', function($scope, $jsonpService) {
      //获取数据
      $jsonpService.myJsonp('http://api.douban.com/v2/movie/in_theaters?start=0', {
          count: 5
        },
        function(data) {
          //获取数据
          $scope.data = data;
          //swiper初始化
          initSwiper();
          //通知angular 异步的数据改变了
          $scope.$apply();
        });
      function initSwiper() {
        var mySwiper = new Swiper('.swiper-container', {
          loop: true,
          autoplay: 2000,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          // 改变自动更新
          observer: true,
          observeParents: true
        });
      }

    }]);
})(angular);
