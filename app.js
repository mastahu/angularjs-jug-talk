'use strict'

var app = angular.module('app', []);

app.constant('attendeesLimit', 5);

app.constant('messages', {
	maxLimitReached: 'Sorry, no more slots available'
});

app.controller('PeopleCtrl', function($scope, registeredAttendees, messages) {

	$scope.people = registeredAttendees.attendees;

	$scope.addPerson = function() {
		if(registeredAttendees.addAttendee($scope.newAttendee) === false) {
			$scope.message = messages.maxLimitReached;
			return;
		}
		delete $scope.newAttendee;
	}

});

app.service('registeredAttendees', function(attendeesLimit) {

	this.attendees = [
		{name: 'John Doe', email: 'john@doe.com', confirmed: true},
		{name: 'Mary Smith', email: 'mary@smith.com', confirmed: false},
		{name: 'Bob Brown', email: 'bob@brown.com', confirmed: true}
	];

	this.addAttendee = function(attendee) {
		if(this.attendees.length == attendeesLimit) {
			return false;
		}
		this.attendees.push(attendee);			
	};

});