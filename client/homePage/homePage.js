angular.module('homePage', [])

.controller('homePageController', function($scope, $location, retrieve){

	$scope.data = {};

	$scope.getNutritionInfo = function(food) {
		retrieve.retrieveData(food)
		.then(function(data) {
			console.log('data', data);
			$scope.data = data;
			$scope.input ="";
		})
		.catch(function(err) {
			console.error(err);
		});
	};

})