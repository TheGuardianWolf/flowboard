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

  listData() {
    const boardId = FlowRouter.getParam('board_id');
    const currentBoard = Boards.findOne({
      id: boardId,
    });

    if (currentBoard) {
      const boardUsers = Meteor.users
        .find({ _id: { $in: currentBoard.users } })
        .map((user) => ({
          item: user,
          id: user._id,
          name:
            user.username || user.emails[0].address.split('@')[0] || 'unknown',
        }));

      const boardLists = Lists.find({
        _id: { $in: currentBoard.lists, $orderBy: { index: 1 } },
      });

      const view = boardLists.map((list) => ({
        item: list,
        cardsByUsers: boardUsers.map((userView) => ({
          id: userView.id,
          userName: userView.name,
          cards: Cards.find({
            ownedBy: userView.id,
            $orderby: { createdAt: 1 },
          }).map((card) => ({
            id: card._id,
            title: card.title,
          })),
        })),
      }));

      return view;
    }

    return [];
  },
});
