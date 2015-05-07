angular.module('example', ['jbAngularSelectable'])
.controller('singleSelectCtrl', function($scope, Selectables) {
  $scope.pets = ['dog', 'cat', 'gerbil', 'bird']
  $scope.selectables = new Selectables()
})
.controller('exampleSelectCtrl', function($scope) {
  $scope.avengers = ['Captain America', 'Ironman', 'The Hulk', 'Thor'];
})
