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
			return;
		}
		delete $scope.newAttendee;
	}

});

app.service('registeredAttendees', function(attendeesLimit, $rootScope) {

	this.attendees = [
		{name: 'John Doe', email: 'john@doe.com', confirmed: true},
		{name: 'Mary Smith', email: 'mary@smith.com', confirmed: false},
		{name: 'Bob Brown', email: 'bob@brown.com', confirmed: true}
	];

	this.addAttendee = function(attendee) {
		if(this.attendees.length == attendeesLimit) {
			$rootScope.$broadcast('error');
			return false;
		}
		this.attendees.push(attendee);			
	};

});

app.directive('errorMsg', function($rootScope, messages) {

	return {
		restrict: 'E',
		scope: {},
		template: '<div ng-show="message"><span style="color:red">{{message}}</span><button ng-click="ok()">Ok, got it</button></div>',
		link: function(scope, el, attrs) {
			$rootScope.$on('error', function() {
				scope.message = messages.maxLimitReached + ' [ I am from directive]';
			});
		},
		controller: function($scope) {
			$scope.ok = function() {
				delete $scope.message;
			}
		}
	}

});