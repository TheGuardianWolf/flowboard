import { Mongo } from 'meteor/mongo';

export const Lists = new Mongo.Collection('lists');

export class List {
  constructor({ id, title, index, cards = [], createdAt = Date.now() }) {
    this._id = id;
    this.title = title;
    this.index = index;
    this.cards = cards;
    this.createdAt = createdAt;
  }
}
