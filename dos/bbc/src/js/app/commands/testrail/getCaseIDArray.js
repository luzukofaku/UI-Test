const loadJsonFile = require('load-json-file');

exports.command = function getCaseIDArray(callback) {
  const self = this;
  this.perform(() => {
    loadJsonFile('testrail/workingData/caseID.json')
      .then((json) => {
        if (typeof callback === 'function') {
          callback.call(self, json);
        }
      });
  });
};
