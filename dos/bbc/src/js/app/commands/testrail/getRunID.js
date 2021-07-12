const loadJsonFile = require('load-json-file');

exports.command = function getRunID(callback) {
  const self = this;
  this.perform(() => {
    loadJsonFile('testrail/workingData/runID.json')
      .then((json) => {
        if (typeof callback === 'function') {
          callback.call(self, json);
        }
      });
  });
};
