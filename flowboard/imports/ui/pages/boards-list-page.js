import './app-not-found';
import './boards-list-page.html';
import './boards-list-page.less';

import { Board, Boards } from '../../api/boards';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';

Template.Boards_list_page.helpers({
  boards() {
    return Boards.find({});
  },
});

Template.Boards_list_page.events({
  'click #Boards_list_page .cards a.card': (event) => {
    console.log('test');
    event.preventDefault();
    const link = new URL(event.currentTarget.href).pathname;
    if (link) {
      FlowRouter.go(link);
    }
  },
  'click #form-new-board-submit': (event) => {
    const formData = Array.from(
      document.getElementById('form-new-board')
    ).reduce((formData, el) => {
      formData[el.name] = el.value;
      return formData;
    }, {});

    const board = new Board({
      ...formData,
      createdBy: Meteor.userId(),
    });

    Boards.insert(board);
  },
});
