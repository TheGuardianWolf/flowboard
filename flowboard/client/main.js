import '/imports/startup/client';
import '/imports/startup/both';
import '../imports/startup/client/template-helpers';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import $ from 'jquery';
import popper from 'popper.js';

window.jQuery = window.$ = $;

global.Popper = popper;
