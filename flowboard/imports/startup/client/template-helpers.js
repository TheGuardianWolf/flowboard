import Identicon from 'identicon.js';
import { Template } from 'meteor/templating';
import md5 from 'md5';

Template.registerHelper('generateIdenticon', (s, imageSize) => {
  return new Identicon(md5(s), imageSize).toString();
});
