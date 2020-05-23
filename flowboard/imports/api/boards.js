import { Mongo } from 'meteor/mongo';
import _ from 'lodash';

export const Boards = new Mongo.Collection('boards');

export class Board {
  constructor({
    title,
    createdBy,
    lists = [],
    cards = [],
    users = [],
    createdAt = Date.now(),
  }) {
    this._id = _.camelCase(title);
    this.title = title;
    this.lists = lists;
    this.cards = cards;
    this.users = users;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
  }
}
