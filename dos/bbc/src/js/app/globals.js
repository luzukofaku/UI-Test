const testrail = require('./testrail/testrailClient');

const testrail_integration_enabled = false;

module.exports = {

  before(browser, done) {
    if (testrail_integration_enabled) {
      testrail.createTestRun();
      done();
    } else {
      done();
    }
  },

  beforeEach(browser, done) {
    browser.url(`${browser.launch_url}`);
    done();
  },

  afterEach(browser, done) {
    done();
  },

  after(browser, done) {
    if (testrail_integration_enabled) {
      testrail.cleanup(done);
      done();
    } else {
      done();
      browser.end();
    }
  },

  testrail,
  testrail_integration_enabled,
  customReporterCallbackTimeout: 50000,
  waitForConditionTimeout: 10 * 1000, // 10 seconds
  retryAssertionTimeout: 2000,
  suppressWebdriverErrors: true,
};
