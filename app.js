(function () {
'use strict';

console.log('AngularJS module iniitalization loaded');

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  console.log('LunchCheckController loaded started');

  $scope.foods = "";
  $scope.message = "";
  $scope.status = 0;
  $scope.checkFood = function () {
    $scope.status = checkStringContainsUpToNumber($scope.foods, ',', 3);
    $scope.message = decideMessage($scope.status);
  }

  function decideMessage(status) {
    switch(status) {
      case('nok'):
      return "Too much!";
      break;
      case('normal'):
      return "Please enter data first";
      break;
      case('ok'):
      return "Enjoy!";
      break;
      default:
      return "Oooops!";
    }
  }

  //examine string containing data separated with delimiter
  //returns ''normal' if array contains no data, 'ok' if OK(1-number), 'nok' if too many items(>number)
  function checkStringContainsUpToNumber (string, delimiter, number) {
    if(string.length == 0) {
      return 'normal';
    } else {
      var data = $scope.foods.split(delimiter);
      if(data.length <= number) {
        return 'ok';
      } else {
        return 'nok';
      }
    }
  }

  console.log('LunchCheckController loaded ended');

}

})();
