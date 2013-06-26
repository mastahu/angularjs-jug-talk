'use strict'

var app = angular.module('app', []);

app.controller('PeopleCtrl', function($scope, registeredAttendees) {

	$scope.people = registeredAttendees.attendees;

	$scope.addPerson = function() {
		registeredAttendees.addAttendee($scope.newAttendee);
		delete $scope.newAttendee;
	}

});

app.service('registeredAttendees', function() {

	this.attendees = [
		{name: 'John Doe', email: 'john@doe.com', confirmed: true},
		{name: 'Mary Smith', email: 'mary@smith.com', confirmed: false},
		{name: 'Bob Brown', email: 'bob@brown.com', confirmed: true}
	];

	this.addAttendee = function(attendee) {
		this.attendees.push(attendee);
	};

});