(
function () {
    'use strict';
    var app = angular.module('LunchCheck', []);

    app.controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
		
        $scope.name='';
        $scope.message='';
		$scope.green_opacity = '';
        $scope.red_opacity = '';
		
		$scope.displayNumeric = function () {
			
			var lunchitem = $scope.name.length;

			    let $items = $scope.name.split(',');
				let counter = 0;
				
                $items.forEach((item) => {
					
				if (item != false) {
									counter++;
									}
                });
            if (lunchitem == null || (lunchitem == 0 || counter==0))
            {
                $scope.message = "Please enter data first";
				 $scope.red_opacity = '';
                 $scope.green_opacity = '';
            }
            else 
            {
                $scope.message = counter< 4? 'Enjoy!' : 'Too much!';
				 $scope.green_opacity = counter<= 3? 'opaque' : '';
				 $scope.red_opacity = counter > 3? 'opaque' :  '';				
            };
			 
        };
    };
})();