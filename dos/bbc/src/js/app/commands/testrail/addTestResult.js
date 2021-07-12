const rp = require('request-promise');

const url = 'https://gbo.testrail.net/index.php?/api/v2/';
const auth = 'Basic cWEuYXV0b21hdGlvbkBncHAuZ3JvdXA6bUEzRWlCZUg5TjgzbVJNNjVKREMtVUpVVUxWSFhmZ1Y3a0x4ZEhDd2I=';


exports.command = function addTestResult(testResultStatus, caseID) {
  this.perform((done) => {
    // console.log(this.currentTest.results.assertions);

    let runID;
    let ass = JSON.stringify(this.currentTest.results.assertions);

    this.testrail.getRunID(async (a) => {
      runID = a;

      const body_status_id = testResultStatus;
      const options = {
        method: 'POST',
        url: `${url}add_result_for_case/${runID}/${caseID}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth,
        },
        body: JSON.stringify({ status_id: `${body_status_id}`, comment: `${ass}` }),
      };

      await rp(options,
        (error, response, body) => {
          if (error) {
              console.log(error);
          }
           console.log('\n RESPONSE: \n');
           console.log(response);
           console.log(body);
           console.log('\n');
          done();
        });
    });
  });
};
