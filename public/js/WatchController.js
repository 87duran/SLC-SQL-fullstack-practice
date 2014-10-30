var app = angular.module('watchuwant');

app.controller('WatchController', function($scope, watchService) {
	$scope.getWatches = function() {
		watchService.getWatches().then(function(data) {
			$scope.watches = data.data;
			console.log(data.data);
		})
	}
	$scope.getWatches();
});