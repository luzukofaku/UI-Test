const commands = {
  waitTillPageReady() {
    this.api.waitForElementVisible('.orb-nav-blocks', 5000);
    this.maximizeWindow();
  },

  navigateScoresAndFixturesdPage() {
    this.api.page.fixtures()
    // Navigate to today footbal scores and fixtures
      .waitForElementVisible('@sportMenuItem')
      .assert.visible('@sportMenuItem')
      .click('@sportMenuItem')

      .waitForElementVisible('@footballMenuItem')
      .assert.visible('@footballMenuItem')
      .click('@footballMenuItem')

      .waitForElementVisible('@scoresAndfixtureslMenuItem')
      .assert.visible('@scoresAndfixtureslMenuItem')
      .click('@scoresAndfixtureslMenuItem');
  },

};
module.exports = {
  commands: [commands],
  elements: {
    signInlink: { selector: '#idcta-username' },
    usenameInput: { selector: '#user-identifier-input' },
    passwordInput: { selector: '#password-input' },
    signinButton: { selector: '#submit-button' },
    signinPageTitle: { selector: '.u-padding-bottom-quad > span' },
    invalidUsernameMessage: { selector: '#form-message-username' },
    invalidPasswordMessage: { selector: '#form-message-password' },
  },
};
