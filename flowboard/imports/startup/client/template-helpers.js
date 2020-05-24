import Identicon from 'identicon.js';
import { Template } from 'meteor/templating';
import md5 from 'md5';

export const generateIdenticon = (s, imageSize) => {
  return new Identicon(md5(s), imageSize).toString();
};

Template.registerHelper('generateIdenticon', generateIdenticon);
