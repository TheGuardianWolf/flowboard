// Type definitions for BlazeLayout.
// Project: https://atmospherejs.com/kadira/blaze-layout
// Definitions by:
// <https://github.com/fullflavedave>

interface BlazeLayoutStatic {
  render(
    routeName: string,
    subTemplates?: { [templateName: string]: string }
  ): void;
  setRoot(
    rootSelectorDOMNodeOrJQueryObject: string | HTMLElement | Object
  ): string; // TODO: fix JQuery Object def
}

declare var BlazeLayout: BlazeLayoutStatic;

declare module "meteor/kadira:blaze-layout" {
  export var BlazeLayout: BlazeLayoutStatic;
}
