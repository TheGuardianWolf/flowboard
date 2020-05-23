import { Template } from 'meteor/templating';

import { Boards } from '../../api/boards';

import './boards-list.html';

Template.Boards_list.helpers({
  boards() {
    return Boards.find({});
  }
})
