'use strict'

var app = angular.module('app', []);

app.controller('PeopleCtrl', function($scope) {

	$scope.people = ['John Doe', 'Mary Smith'];

	$scope.addPerson = function() {
		$scope.people.push($scope.newAttendee);
	}

});