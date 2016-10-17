

angular.module('nutritionDiary', [
		'homePage', 
	'services',
	'ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'homePage/homePage.html',
			controller: 'homePageController'

		})	
})


