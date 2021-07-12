const loadJsonFile = require('load-json-file');
const writeJsonFile = require('write-json-file');

exports.command = function updateCaseIDArray(caseID, callback) {
  const self = this;
  this.perform((done) => {
    loadJsonFile('testrail/workingData/caseID.json')
      .then(async (json) => {
        const m = json.case_ids.includes(caseID);
        if (!m) {
          json.case_ids.push(caseID);
          await writeJsonFile('testrail/workingData/caseID.json', json);
        }
        if (typeof callback === 'function') {
          callback.call(self);
        }
      });
    done();
  });
};

// Usage Example
// if (browser.globals.testrail_integration_enabled) {
//   browser.perform(async (done) => {
//     console.log('\n TEST: Update Test Run \n');
//     await browser.testrail.updateCaseIDArray(caseid, async () => {
//       await browser.testrail.updateTestRun();
//       done();
//     });
//   });
// }
