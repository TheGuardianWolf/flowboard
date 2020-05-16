import { Mongo } from 'meteor/mongo';

export const Boards = new Mongo.Collection('boards');

export class Board {
  constructor({ id, title, lists = [], cards = [], createdAt = Date.now() }) {
    this._id = id;
    this.title = title;
    this.lists = lists;
    this.cards = cards;
    this.createdAt = createdAt;
  }
}
