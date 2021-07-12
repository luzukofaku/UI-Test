module.exports = {
  '@tags': ['BBCSystem', 'sportArticlesDisplay'],

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

  'Confirm all articles related to sports are displayed correctlty': (browser) => {
    // Menu Navigation
    browser.page.fixtures().navigateScoresAndFixturesdPage();
    browser.page.fixtures()
      .waitForElementVisible('@searchInput')
      .assert.visible('@searchInput')
      .click('@searchInput')
      .setValue('@searchInput', 'sports articles')
      .assert.visible('@searchButton')
      .moveToElement('@searchButton', 0, 0)
      .click('@searchButton')
    // Check if first article heading is available
      .waitForElementVisible('@firstArticleHeading')
      .assert.visible('@firstArticleHeading')
    // Check if first article heading is available
      .waitForElementVisible('@lastArticleHeading')
      .assert.visible('@lastArticleHeading');
    browser.pause(3000);
  },
};
