angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {derp:'test'};
  $scope.addLink = Links.addLink;
});
