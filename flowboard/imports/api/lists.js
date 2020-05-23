import { Mongo } from 'meteor/mongo';
import _ from 'lodash';

export const Lists = new Mongo.Collection('lists');

export class List {
  constructor({ title, createdBy, index, cards = [], createdAt = Date.now() }) {
    this._id = _.camelCase(title);
    this.title = title;
    this.createdBy = createdBy;
    this.index = index;
    this.cards = cards;
    this.createdAt = createdAt;
  }
}
