import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

export enum BoardType {
  Flowboard,
}

export interface IBaseModel {
  meta: object;
  lastModifiedAt: number;
  lastModifiedBy: string | null;
  createdAt: number;
  createdBy: string | null;
}

export class BaseModel implements IBaseModel {
  meta: object = {};
  createdAt: number = Date.now();
  createdBy: string | null = Meteor.userId();
  lastModifiedAt: number = Date.now();
  lastModifiedBy: string | null = Meteor.userId();
}

export interface ICard extends IBaseModel {
  title: string;
  order: number;
  archived: boolean;
}

export class Card {}

export interface IList extends IBaseModel {
  title: string;
  order: number;
  archived: boolean;
}

export class List {}

export interface IBoard extends IBaseModel {
  title: string;
  type: BoardType;
  lists: List[];
  users: Meteor.User[];
}

export class Board extends BaseModel implements IBoard {
  title: string;
  type: BoardType;
  lists: List[] = [];
  cards: Card[] = [];
  users: Meteor.User[] = [];

  constructor(props: IBoard) {
    super();
    Object.assign(this, props);
  }
}
