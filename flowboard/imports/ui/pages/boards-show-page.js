import './app-not-found';
import './boards-show-page.html';
import './boards-show-page.less';

import { Boards } from '../../api/boards';
import { Cards } from '../../api/cards';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Lists } from '../../api/lists';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import _ from 'lodash';

Template.Boards_show_page.helpers({
  lists(userId) {
    return [{}, {}, {}];
  },

  users() {
    return [{}, {}];
  },

  data() {
    const boardId = FlowRouter.getParam('board_id');
    const currentBoard = Boards.findOne({
      _id: boardId,
    });

    const view = {
      users: [],
      lists: [],
    };

    if (currentBoard) {
      const boardUsers = Meteor.users.find({ _id: { $in: currentBoard.users } }).map((user) => ({
        item: user,
        id: user._id,
        name: user.username || user.emails[0].address.split('@')[0] || 'unknown',
      }));

      const boardLists = Lists.find(
        {
          _id: { $in: currentBoard.lists },
        },
        {
          sort: { index: 1 },
        }
      );

      const lists = boardLists.map((list) => ({
        item: list,
        cardsByUsers: boardUsers.map((userView) => ({
          id: userView.id,
          userName: userView.name,
          cards: Cards.find(
            {
              ownedBy: userView.id,
            },
            { sort: { createdAt: 1 } }
          ).map((card) => ({
            id: card._id,
            title: card.title,
          })),
        })),
      }));

      view.users = boardUsers;
      view.lists = lists;
    }
    console.log(view);
    return view;
  },
});
