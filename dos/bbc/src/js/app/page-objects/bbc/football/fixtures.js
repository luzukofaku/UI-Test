const commands = {
  waitTillPageReady() {
    this.api.waitForElementVisible('.orb-nav-blocks', 5000);
    this.maximizeWindow();
  },

  navigateScoresAndFixturesdPage() {
    this
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
    sportMenuItem: { selector: '#orb-nav-links .orb-nav-sport > a' },
    footballMenuItem: { selector: '.sp-c-sport-navigation__inner > .sp-c-sport-navigation__item:nth-child(2)' },
    scoresAndfixtureslMenuItem: { selector: '.sp-c-sport-navigation__item:nth-child(2) > .sp-c-sport-navigation__link--secondary' },
    todayDatePicker: { selector: '#sp-timeline-current-dates > li' },
    searchInput: { selector: '#orb-search-q' },
    searchButton: { selector: '#orb-search-button' },
    firstArticleHeading: { selector: 'li:nth-child(1) > div > div a' },
    lastArticleHeading: { selector: 'li:nth-child(10) > div > div a' },
    signInlink: { selector: '#idcta-username' },
    usenameInput: { selector: '#user-identifier-input' },
    passwordInput: { selector: '#password-input' },
    signinButton: { selector: '#submit-button' },
    signinPageTitle: { selector: '.u-padding-bottom-quad > span' },
  },
};
