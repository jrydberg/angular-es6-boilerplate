/*
    Import all Angular components via ES6 imports
*/
import RssFeedModule from './components/RssFeed';
import { UpgradeAdapter } from '../../node_modules/@angular/upgrade';

const upgradeAdapter = new UpgradeAdapter();

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
upgradeAdapter.bootstrap(document.documentElement, ['rssApp']);
// angular.element(document).ready(function() {
//     angular.bootstrap(document, ['rssApp']);
// });
