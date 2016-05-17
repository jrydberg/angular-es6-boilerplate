import { RssFeedListComponent } from './rss-feed-list.component';
import RssFeedService from './rss-feed.service';
import upgradeAdapter from '../../upgrade-adapter';

// This is what we use to include the module in app.js
export default 'rssApp.rssFeed';

/*
	Define module rssApp.rssFeed
*/
angular.module('rssApp.rssFeed', [])
.directive('rssList', upgradeAdapter.downgradeNg2Component(RssFeedListComponent))
.service('RssFeed', RssFeedService);
console.log(upgradeAdapter);
