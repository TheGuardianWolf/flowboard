import { Mongo } from 'meteor/mongo';

export const Cards = new Mongo.Collection('cards');

export class Card {
  constructor({
    _id,
    title,
    content = '',
    lists = [],
    createdAt = Date.now(),
  }) {
    this._id = _id;
    this.title = title;
    this.content = content;
    this.lists = lists;
    this.createdAt = createdAt;
  }
}
