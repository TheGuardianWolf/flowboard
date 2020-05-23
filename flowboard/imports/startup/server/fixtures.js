import { Board, Boards } from '../../api/boards';
import { Card, Cards } from '../../api/cards';
import { List, Lists } from '../../api/lists';

import { Meteor } from 'meteor/meteor';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Boards.find().count() === 0) {
    const cardData = new Card({ _id: 0, title: 'Your first card' });
    const listData = new List({
      _id: 0,
      title: 'Card List',
      index: 0,
      cards: [cardData._id],
    });
    const boardData = new Board({
      _id: 0,
      title: 'Welcome',
      lists: [listData._id],
      cards: [cardData._id],
    });

    Boards.insert(boardData);
    Lists.insert(listData);
    Cards.insert(cardData);
  }
});
