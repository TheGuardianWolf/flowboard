import { Mongo } from 'meteor/mongo';

export const Cards = new Mongo.Collection('cards');

export class Card {
  constructor({ id, title, content = '', lists = [], createdAt = Date.now() }) {
    this._id = id;
    this.title = title;
    this.content = content;
    this.lists = lists;
    this.createdAt = createdAt;
  }
}
