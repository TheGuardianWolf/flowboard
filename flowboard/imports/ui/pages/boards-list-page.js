import './app-not-found';
import './boards-list-page.html';
import './boards-list-page.less';

import { Board, Boards } from '../../api/boards';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import { generateIdenticon } from '../../startup/client/template-helpers';

const formSubmit = (event) => {
  event.preventDefault();
  const form = document.getElementById('form-new-board');
  const formData = Array.from(form).reduce((formData, el) => {
    formData[el.name] = el.value;
    return formData;
  }, {});
  const currentUser = Meteor.userId();
  const board = new Board({
    ...formData,
    createdBy: currentUser,
    users: [currentUser],
  });
  Boards.insert(board);

  window.$(document.getElementById('newBoardModal')).modal('hide');
};

Template.Boards_list_page.onCreated(() => {
  const template = Template.instance();
  template.newBoardName = new ReactiveVar('');
});

Template.Boards_list_page.helpers({
  boards() {
    return Boards.find({});
  },
  newBoardName() {
    return Template.instance().newBoardName.get();
  },
});

Template.Boards_list_page.events({
  'submit #form-new-board': formSubmit,
  'change #form-new-board-title, paste #form-new-board-title, keyup #form-new-board-title': (
    event,
    template
  ) => {
    if (template.newBoardName) {
      template.newBoardName.set(event.currentTarget.value);
    }
  },
  'click #Boards_list_page .cards a.card': (event) => {
    event.preventDefault();
    const link = new URL(event.currentTarget.href).pathname;
    if (link) {
      FlowRouter.go(link);
    }
  },
});
