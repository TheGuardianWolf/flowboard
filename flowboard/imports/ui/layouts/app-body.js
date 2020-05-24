import './app-body.html';
import './app-body.less';

import { AccountsTemplates } from 'meteor/useraccounts:core';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';

Template.App_body.events({
  'click #nav-logo': (event) => {
    event.preventDefault();
    FlowRouter.go('/');
  },
  'click #nav-logout': (event) => {
    event.preventDefault();
    AccountsTemplates.logout();
  },
  'click #nav-boards': (event) => {
    event.preventDefault();
    FlowRouter.go('/boards');
  },
});
