import RssFeedListComponent from './rss-feed-list.component';
import RssFeedService from './rss-feed.service';

// This is what we use to include the module in app.js
export default 'rssApp.rssFeed';

/*
	Define module rssApp.rssFeed
*/
angular.module('rssApp.rssFeed', [])
.component('rssList', RssFeedListComponent)
.service('RssFeed', RssFeedService);
