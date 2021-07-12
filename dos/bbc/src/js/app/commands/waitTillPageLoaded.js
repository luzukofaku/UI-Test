exports.command = function waitTillPageLoaded() {
  this.pause(3000);
  this.waitForElementVisible('[name="app"] .layout-main .layout-content');
  this.maximizeWindow();
};
