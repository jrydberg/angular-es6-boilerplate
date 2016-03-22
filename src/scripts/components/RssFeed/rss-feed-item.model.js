/*
	RssFeedItem model to store data of RSS posts and the status of favorite.
*/

export default class RssFeedItem {

	constructor(id, title, body) {
		this._id = id;
		this._title = title;
		this._body = body;
		this._isFavorite = false;
	}

	get favorite() {
		return this._isFavorite;
	}

	toggleFavorite() {
		if (this._isFavorite === true) {
			this._isFavorite = false;
		} else {
			this._isFavorite = true;
		}
	}

	get id() {
		return this._id;
	}

	get title() {
		return this._title;
	}

	get body() {
		return this._body;
	}

}