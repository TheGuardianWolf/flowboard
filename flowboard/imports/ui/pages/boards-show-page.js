import './app-not-found';
import '../components/boards-show';
import './boards-show-page.html';
import './boards-show-page.less';

import { Boards } from '../../api/boards';
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

  usersAndLists() {
    const boardId = FlowRouter.getParam('board_id');
    const currentBoard = Boards.findOne({
      id: boardId,
    });

    if (currentBoard) {
      const boardUserData = Meteor.users
        .find({ _id: { $in: currentBoard.users } })
        .map((u) => [
          {
            name: u.username || u.emails[0].address.split('@')[0] || 'unknown',
          },
          u,
        ]);

      const currentLists = Lists.find({
        _id: { $in: currentBoard.lists, $orderBy: { index: 1 } },
      });
    }

    return [];
  },
});
