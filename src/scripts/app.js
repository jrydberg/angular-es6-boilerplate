/*
	Import all Angular components via ES6 imports
*/
import RssFeedModule from './components/RssFeed';

/*
	Define main module
*/
angular.module('rssApp', [
	RssFeedModule
])
.controller('MainCtrl', function($scope, $http, RssFeed) {
	RssFeed.loadFeed($http, 'http://jsonplaceholder.typicode.com/posts')
	.then(function (feed) {
		$scope.feed = feed;
	});
});
