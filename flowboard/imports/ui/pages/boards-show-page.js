import './app-not-found';
import './boards-show-page.html';
import './boards-show-page.less';

import { List, Lists } from '../../api/lists';

import { Boards } from '../../api/boards';
import { Cards } from '../../api/cards';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import _ from 'lodash';

const getCurrentBoard = () => {
  const boardId = FlowRouter.getParam('board_id');
  const currentBoard = Boards.findOne({
    _id: boardId,
  });

  return currentBoard;
};

const newListformSubmit = (event) => {
  event.preventDefault();

  const currentBoard = getCurrentBoard();

  const form = document.getElementById('form-new-list');
  const formData = Array.from(form).reduce((formData, el) => {
    formData[el.name] = el.value;
    return formData;
  }, {});
  const currentUser = Meteor.userId();
  const list = new List({
    ...formData,
    createdBy: currentUser,
    index: currentBoard.lists.length,
  });
  const listId = Lists.insert(list);
  currentBoard.lists.push(listId);
  Boards.update({ _id: currentBoard._id }, { $set: { lists: currentBoard.lists } });

  $(document.getElementById('newListModal')).modal('hide');
};

Template.Boards_show_page.helpers({
  isCreator() {
    const currentBoard = getCurrentBoard();

    if (currentBoard) {
      return currentBoard.createdBy === Meteor.userId();
    }

    return false;
  },

  data() {
    const currentBoard = getCurrentBoard();

    const view = {
      board: {},
      users: [],
      lists: [],
    };

    if (currentBoard) {
      const userMap = Meteor.users
        .find({ _id: { $in: currentBoard.users } })
        .fetch()
        .reduce((obj, user) => {
          obj[user._id] = {
            item: user,
            id: user._id,
            name: user.username || user.emails[0].address.split('@')[0] || 'unknown',
          };
          return obj;
        }, {});

      const boardUsers = currentBoard.users
        .filter((userId) => userMap.hasOwnProperty(userId))
        .map((userId) => userMap[userId]);

      const boardLists = Lists.find(
        {
          _id: { $in: currentBoard.lists },
        },
        {
          sort: { index: 1 },
        }
      );

      const lists = boardLists.map((list) => ({
        title: list.title,
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

      view.board = currentBoard;
      view.users = boardUsers;
      view.lists = lists;
    }

    return view;
  },
});

Template.Boards_show_page.events({
  'click #board-add-user': () => {
    const boardId = FlowRouter.getParam('board_id');
    const currentBoard = Boards.findOne({
      _id: boardId,
    });

    if (currentBoard) {
      if (currentBoard.users.includes(Meteor.userId())) {
        currentBoard.users = currentBoard.users.filter((userId) => userId !== Meteor.userId());
      } else {
        currentBoard.users.push(Meteor.userId());
      }

      Boards.update({ _id: boardId }, { $set: { users: currentBoard.users } });
    }
  },

  'submit #form-new-list': newListformSubmit,
});
