var app = angular.module('watchuwant');

app.service('watchService', function($http) {
	this.getWatches = function() {
		return $http({
			method: 'GET',
			url:'http://localhost:3001/watches'

		})
	}
})