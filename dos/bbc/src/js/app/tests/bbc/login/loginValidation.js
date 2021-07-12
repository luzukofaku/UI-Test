module.exports = {
  '@tags': ['BBCSystem', 'loginValidation'],

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

  'Verify negative tests for login page are covered': (browser) => {
    // Menu Navigation
    browser.page.login().navigateScoresAndFixturesdPage();
    browser.page.login()
    // Navigate to login screen
      .waitForElementVisible('@signInlink')
      .assert.visible('@signInlink')
      .click('@signInlink')
      .waitForElementVisible('@signinPageTitle', 3000)
    // Verify the incorrect username and incorrect password
      .assert.visible('@usenameInput')
      .click('@usenameInput')
      .setValue('@usenameInput', 'jhajhakjah@')
      .assert.visible('@passwordInput')
      .click('@passwordInput')
      .setValue('@passwordInput', 'xvdshshfbbfzas')
      .click('@signinButton')
      .waitForElementVisible('@invalidUsernameMessage', 3000)
      .assert.elementPresent('@invalidUsernameMessage')
      .assert.containsText('@invalidUsernameMessage', 'Sorry, that email doesn’t look right. Please check it\'s a proper email.')
      .waitForElementVisible('@invalidPasswordMessage', 3000)
      .assert.elementPresent('@invalidPasswordMessage')
      .assert.containsText('@invalidPasswordMessage', 'Sorry, that password isn\'t valid. Please include something that isn\'t a letter.')
    // Verify valid username and incorrect password.
      .clearValue('@usenameInput')
      .clearValue('@passwordInput')
      .click('@usenameInput')
      .setValue('@usenameInput', 'luzukofaku@gmail.com')
      .click('@passwordInput')
      .setValue('@passwordInput', 'ygdagadgiohadidahaidh')
      .click('@signinButton')
      .waitForElementVisible('@invalidPasswordMessage', 3000)
      .assert.elementPresent('@invalidPasswordMessage')
      .assert.containsText('@invalidPasswordMessage', 'Sorry, that password isn\'t valid. Please include something that isn\'t a letter.')
      // Verify valid username and password without a letter.
      .clearValue('@usenameInput')
      .clearValue('@passwordInput')
      .click('@usenameInput')
      .setValue('@usenameInput', 'luzukofaku@gmail.com')
      .click('@passwordInput')
      .setValue('@passwordInput', '!@#$%^&**&^%@#$%^&*(*&^%$#$%^&*()(*&^%$%^))')
      .click('@signinButton')
      .waitForElementVisible('@invalidPasswordMessage', 3000)
      .assert.elementPresent('@invalidPasswordMessage')
      .assert.containsText('@invalidPasswordMessage', 'Sorry, that password isn\'t valid. Please include a letter.')
    // Verify empty username and empty password.
      .clearValue('@usenameInput')
      .clearValue('@passwordInput')
      .click('@usenameInput')
      .setValue('@usenameInput', '')
      .click('@passwordInput')
      .setValue('@passwordInput', '')
      .click('@signinButton')
      .waitForElementVisible('@invalidUsernameMessage', 3000)
      .assert.elementPresent('@invalidUsernameMessage')
      .assert.containsText('@invalidUsernameMessage', 'Something\'s missing. Please check and try again.')
      .waitForElementVisible('@invalidPasswordMessage', 3000)
      .assert.elementPresent('@invalidPasswordMessage')
      .assert.containsText('@invalidPasswordMessage', 'Something\'s missing. Please check and try again.')
    // Verify valid username and empty password
      .clearValue('@usenameInput')
      .clearValue('@passwordInput')
      .click('@usenameInput')
      .setValue('@usenameInput', 'luzukofaku@gmail.com')
      .click('@passwordInput')
      .setValue('@passwordInput', '')
      .click('@signinButton')
      .waitForElementVisible('@invalidPasswordMessage', 3000)
      .assert.elementPresent('@invalidPasswordMessage')
      .assert.containsText('@invalidPasswordMessage', 'Something\'s missing. Please check and try again.')
    // Verify valid password and empty username
      // .clearValue('@usenameInput')
      // .clearValue('@passwordInput')
      // .click('@usenameInput')
      // .setValue('@usenameInput', '')
      // .click('@passwordInput')
      // .setValue('@passwordInput', 'bbc@2021')
      // .click('@signinButton')
      // .waitForElementVisible('@usenameInput', 3000)
      // .assert.elementPresent('@usenameInput')
      // .assert.containsText('@usenameInput', 'Something\'s missing. Please check and try again.')
    // Verify valid username with short password
      .clearValue('@usenameInput')
      .clearValue('@passwordInput')
      .click('@usenameInput')
      .setValue('@usenameInput', 'luzukofaku@gmail.com')
      .click('@passwordInput')
      .setValue('@passwordInput', 'abc')
      .click('@signinButton')
      .waitForElementVisible('@invalidPasswordMessage', 3000)
      .assert.elementPresent('@invalidPasswordMessage')
      .assert.containsText('@invalidPasswordMessage', 'Sorry, that password is too short. It needs to be eight characters or more.')
    // Verify with email too long and valid password
      .clearValue('@usenameInput')
      .clearValue('@passwordInput')
      .click('@usenameInput')
      .setValue('@usenameInput', 'fhgjkdjskhgfsjklmmmsmsFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFU')
      .click('@passwordInput')
      .setValue('@passwordInput', 'bbc@2021')
      .click('@signinButton')
      .waitForElementVisible('@invalidUsernameMessage', 5000)
      .assert.elementPresent('@invalidUsernameMessage')
      .assert.containsText('@invalidUsernameMessage', 'Sorry, that username\'s too long. It can\'t be more than 50 characters.')
      // Verify with password too long and valid username
      .clearValue('@usenameInput')
      .clearValue('@passwordInput')
      .click('@usenameInput')
      .setValue('@usenameInput', 'luzukofaku@gmail.com')
      .click('@passwordInput')
      .setValue('@passwordInput', 'FUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFUFU')
      .click('@signinButton')
      .waitForElementVisible('@invalidPasswordMessage', 5000)
      .assert.elementPresent('@invalidPasswordMessage')
      .assert.containsText('@invalidPasswordMessage', 'Sorry, that password is too long. It can\'t be more than 50 characters.');
    browser.pause(3000);
  },
};
