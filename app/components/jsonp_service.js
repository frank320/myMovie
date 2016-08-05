/**
 * Created by Frank
 */
(function (angular) {
  'use strict';
  angular.module('myMovie.jsonp', [])
    .service('jsonpService', ['$window', function ($window) {
      this.myJsonp = function (url, arg, fn) {
        //拼接url参数
        var queryString = '&';
        if (!arg) {
          queryString = '?';
        }
        for (var k in arg) {
          queryString += k + '=' + arg[k] + '&';
        }
        //随机生成一个随机函数名
        var funcName = 'myJsonp_' + $window.Math.random().toString().substr(2)
        $window[funcName] = fn
        //拼接url参数
        url += queryString + 'callback=' + funcName;
        //动态创建script标签
        var script = $window.document.createElement('script');
        script.src = url;
        $window.document.body.appendChild(script);
      };
    }]);
})(angular);