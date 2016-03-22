function RssFeedListCtrl() {
	var ctrl = this;

	ctrl.setCurrent = function(index) {
		this.currentPost = ctrl.rssFeed[index];
	};
} 

export default {
	templateUrl: '/scripts/components/RssFeed/RssList.html',
	controller: RssFeedListCtrl,
	bindings: {
		rssFeed: '<'
 	}	
};