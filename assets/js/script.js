var alertApp = angular.module('myAlert', []);
alertApp.controller('alertCtrl', ['$scope', '$window', function($scope, $window) {
  $scope.message = 'Bonjour Mickaël !';
  $scope.messageBye = 'Au revoir Mickaël';
  $scope.sentence = function(messageAlert){
      $window.alert(messageAlert);
    };
}]);
