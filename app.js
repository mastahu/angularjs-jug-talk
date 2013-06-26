'use strict'

var app = angular.module('app', []);

app.controller('PeopleCtrl', function($scope) {

	$scope.people = [
		{name: 'John Doe', email: 'john@doe.com', confirmed: true},
		{name: 'Mary Smith', email: 'mary@smith.com', confirmed: false}
	];

	$scope.addPerson = function() {
		$scope.people.push($scope.newAttendee);
		delete $scope.newAttendee;
	}

});