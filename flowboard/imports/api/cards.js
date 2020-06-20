import { Mongo } from 'meteor/mongo';
import _ from 'lodash';

export const Cards = new Mongo.Collection('cards');

export class Card {
  constructor({
    title,
    createdBy,
    ownedBy,
    users = [],
    content = '',
    createdAt = Date.now(),
  }) {
    this.title = title;
    this.createdBy = createdBy;
    this.ownedBy = ownedBy;
    this.content = content;
    this.users = users;
    this.createdAt = createdAt;
  }
}
