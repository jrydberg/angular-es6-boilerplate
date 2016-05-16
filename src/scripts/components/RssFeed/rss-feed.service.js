import RssFeedItem from './rss-feed-item.model';

export default class RssFeedService {

    constructor($q) {
        this._$q = $q;
    }

    loadFeed($http, url) {
        var deferred = this._$q.defer();
        var feed = [];

        // Get JSON from URL
        $http.get(url)
        .then(function (res) {
            for (var post of res.data) {
                feed.push(new RssFeedItem(post.id, post.title, post.body));
            }
            deferred.resolve(feed);
        })
        .catch(function (err) {
            deferred.reject(err);
        });

        return deferred.promise;
    }

}
