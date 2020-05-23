import './app-body.html';
import './app-body.less';

import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Template } from 'meteor/templating';

Template.App_body.events({
  'click #nav-logout': (event) => {
    event.preventDefault();
    AccountsTemplates.logout();
  },
});
