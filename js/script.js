	// create the module and name it prcApp
	var prcApp = angular.module('prcApp', ['ngRoute']);

	// configure our routes
	prcApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the services page
			.when('/services', {
				templateUrl : 'pages/services.html',
				controller  : 'servicesController'
			})

			// route for the products page
			.when('/products', {
				templateUrl : 'pages/products.html',
				controller  : 'productsController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			// route for the dealers page
			.when('/dealers', {
				templateUrl : 'pages/dealers.html',
				controller  : 'dealersController'
			})
			.otherwise({
				redirectTo: '/home'
			});
	});

	// create the controller and inject Angular's $scope
	prcApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = '';
	});

	prcApp.controller('aboutController', function($scope) {
		$scope.message = '';
	});

	prcApp.controller('servicesController', function($scope) {
		$scope.message = '';
	});

	prcApp.controller('productsController', function($scope) {
		$scope.message = '';
	});

	prcApp.controller('contactController', function($scope) {
		$scope.message = '';
	});	
	
	prcApp.controller('dealersController', function($scope) {
		$scope.message = '';
	});