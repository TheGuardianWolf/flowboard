import { Meteor } from 'meteor/meteor';
import { Board, Boards } from '../../api/boards';
import { Card, Cards } from '../../api/cards';
import { List, Lists } from '../../api/lists';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Boards.find().count() === 0) {
    const cardData = [new Card({ id: 0, title: 'Your first card' })];
    const listData = [
      new List({
        id: 0,
        title: 'Card List',
        index: 0,
        cards: cardData.map((c) => c._id),
      }),
    ];
    const boardData = [
      new Board({
        id: 0,
        title: 'Welcome',
        lists: listData.map((l) => l._id),
        cards: cardData.map((c) => c._id),
      }),
    ];

    Boards.insert(boardData);
    Lists.insert(listData);
    Cards.insert(cardData);
  }
});
