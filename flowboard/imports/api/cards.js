import { Mongo } from 'meteor/mongo';
import _ from 'lodash';

export const Cards = new Mongo.Collection('cards');

export class Card {
  constructor({
    title,
    createdBy,
    content = '',
    lists = [],
    createdAt = Date.now(),
  }) {
    this._id = _.camelCase(title);
    this.title = title;
    this.createdBy = createdBy;
    this.content = content;
    this.lists = lists;
    this.createdAt = createdAt;
  }
}
