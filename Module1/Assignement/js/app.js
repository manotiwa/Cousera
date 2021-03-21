(function () {
    'use strict';

    var app = angular.module('LunchCheck', []);

    app.controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.name;
        $scope.message;
		$scope.displayNumeric = function () {
			
			var lungimea = $scope.name.length;
            console.log(lungimea);
            if (lungimea == null)
            {
                $scope.message = "Please enter data first";
            } 
            else 
            {
                $items = $scope.name.split(",");
                $scope.message = $items.length <= 3? 'Enjoy!' : 'Too much!';
            };
			 
        };
    };
})();