const testrail_integration_enabled = true;

module.exports = {

  before(browser, done) {
    done();
  },

  beforeEach(browser, done) {
    done();
  },

  afterEach(browser, done) {
    done();
  },

  after(browser, done) {
    done();
  },

  // testrail,
  testrail_integration_enabled,
  customReporterCallbackTimeout: 50000,
  waitForConditionTimeout: 10 * 1000, // 10 seconds
  retryAssertionTimeout: 2000,
  suppressWebdriverErrors: true,
};
