import { Template } from 'meteor/templating';

import { Boards } from '../../api/boards';

import './app-not-found';

import './boards-list-page.html';

Template.Boards_list_page.helpers({
  boards() {
    return Boards.find({});
  }
})
