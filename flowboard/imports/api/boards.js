import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
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
    this.title = title;
    this.lists = lists;
    this.cards = cards;
    this.users = users;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
  }
}
