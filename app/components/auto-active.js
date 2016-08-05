/**
 * Created by Frank .
 */
(function (angular) {
  //创建自定义指令 检测锚点变化
  angular.module('myMovie.auto-active', [])
    .directive('autoActive', ['$location', function ($location) {
      return {
        link: function (scope, element, attributes) {
          scope.loca = $location;
          scope.$watch('loca.url()', function (newV, oldV) {
            //console.log( scope.loca.url());
            //console.log( scope.loca.path());
            // console.log(newV);  获取的是地址栏#后面的所有字符串(参数)

            //获取自定义指令所在标签的子标签a的锚点值
            var hash = element.children()[0].href.split('#')[1];
            //检测url参数 判断是否包含hash
            if (newV.startsWith(hash)) {
              //类名操作
              element.parent().children().removeClass('active');
              element.addClass('active');
            }
          });
        }
      };
    }]);
})(angular);