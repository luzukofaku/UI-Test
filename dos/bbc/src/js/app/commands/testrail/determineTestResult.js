exports.command = function determineTestResult(callback) {
  const self = this;
  // console.log('\n Test Result \n');
  // console.log(this.currentTest.results.failed);
  // console.log(this.currentTest.results.errors);
  // console.log(this.currentTest.results.skipped);
  // console.log(this.currentTest.results.passed);
  // console.log('\n');
  this.perform(() => {
    let testStatus;
    if (parseInt(this.currentTest.results.failed, 10) > 0) {
      testStatus = '5';
    } else if (parseInt(this.currentTest.results.errors, 10) > 0) {
      testStatus = '6';
    } else if (parseInt(this.currentTest.results.skipped, 10) > 0) {
      testStatus = '8';
    } else if (parseInt(this.currentTest.results.passed, 10) > 0) {
      testStatus = '1';
    }
    if (typeof callback === 'function') {
      callback.call(self, testStatus);
    }
  });
};
