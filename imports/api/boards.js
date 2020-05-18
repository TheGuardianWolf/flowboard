import { Mongo } from 'meteor/mongo';

export const Boards = new Mongo.Collection('boards');

export class Board {
  constructor({
    _id,
    title,
    lists = [],
    cards = [],
    users = [],
    createdAt = Date.now(),
  }) {
    this._id = _id;
    this.title = title;
    this.lists = lists;
    this.cards = cards;
    this.users = users;
    this.createdAt = createdAt;
  }
}
