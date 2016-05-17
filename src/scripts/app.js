/*
    Import all Angular components via ES6 imports
*/
import RssFeedModule from './components/RssFeed';
import upgradeAdapter from './upgrade-adapter';
import { RssFeedListComponent } from './components/RssFeed/rss-feed-list.component';

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

/*
    Bootstrap Angular app
*/
console.log(upgradeAdapter);
angular.element(document).ready(function() {
    upgradeAdapter.bootstrap(document.body, ['rssApp']);
});
