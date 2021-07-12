module.exports = {
  '@tags': ['BBCSystem', 'todayFixturesDisplay'],

  before(browser, done) {
    if (browser.globals.testrail_integration_enabled) {
      browser.globals.testrail.getRunID(browser);
      done();
    } else {
      done();
    }
  },

  beforeEach(browser, done) {
    browser.url(`${browser.launch_url}`);
    const caseid = 1336918;
    browser.caseid = caseid; // eslint-disable-line
    done();
  },

  afterEach(browser, done) {
    if (browser.globals.testrail_integration_enabled) {
      const testStatusID = browser.globals.testrail.determineStatusID(browser);
      browser.globals.testrail.addTestResult(testStatusID, browser);
      browser.end(done);
    } else {
      browser.end(done);
    }
  },

  after(browser, done) {
    done();
  },

  'Confirm all teams playing today are displayed': (browser) => {
    // Menu Navigation
    browser.page.fixtures().navigateScoresAndFixturesdPage();
    browser.page.fixtures()
    // Validate all teams playing today
      .waitForElementVisible('@todayDatePicker')
      .assert.visible('@todayDatePicker')
      .click('@todayDatePicker');
    browser.pause(3000);
  },
};
