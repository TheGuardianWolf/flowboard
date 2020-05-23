import './app-not-found';
import './boards-list-page.html';

import { Boards } from '../../api/boards';
import { Template } from 'meteor/templating';

Template.Boards_list_page.helpers({
  boards() {
    console.log(Boards.find({}).map((b) => b[0]));
    return Boards.find({}).map((b) => b[0]);
  },
});
