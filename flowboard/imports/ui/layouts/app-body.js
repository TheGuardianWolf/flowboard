import './app-body.html';

import { Template } from 'meteor/templating';
import { AccountsTemplates } from 'meteor/useraccounts:core';

Template.App_body.events({
  'click #nav-logout': (event) => {
    event.preventDefault();
    AccountsTemplates.logout();
  }
})
