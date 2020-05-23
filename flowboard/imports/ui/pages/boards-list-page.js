import './app-not-found';
import './boards-list-page.html';
import './boards-list-page.less';

import { Boards } from '../../api/boards';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';

Template.Boards_list_page.helpers({
  boards() {
    return Boards.find({});
  },
});

Template.Boards_list_page.events({
  'click #boards-list .cards a.card': (event) => {
    event.preventDefault();
    const link = new URL(event.currentTarget.href).pathname;
    if (link) {
      FlowRouter.go(link);
    }
  },
  // 'click #add-board': (event) => {
  //   $('.ui.modal').modal('show');
  // },
});
