import { Component, Input } from '../../../../node_modules/@angular/core';

@Component({
    selector: 'rss-list',
    templateUrl: '/scripts/components/RssFeed/RssList.html',
})
export class RssFeedListComponent {
    @Input() rssFeed:Array;
    currentPost = null;

    setCurrent(index) {
        this.currentPost = this.rssFeed[index];
    }

    isCurrent(index) {
        if (!this.currentPost) {
            return false;
        }
        return (this.currentPost.id === this.rssFeed[index].id);
    }
};

// function RssFeedListCtrl() {
//     var ctrl = this;
//
//     ctrl.setCurrent = function(index) {
//         this.currentPost = ctrl.rssFeed[index];
//     };
// }
//
// export default {
//     templateUrl: '/scripts/components/RssFeed/RssList.html',
//     controller: RssFeedListCtrl,
//     bindings: {
//         rssFeed: '<'
//      }
// };
