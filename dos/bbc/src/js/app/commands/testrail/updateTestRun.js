const rp = require('request-promise');

const url = 'https://gbo.testrail.net/index.php?/api/v2/';
const auth = 'Basic cWEuYXV0b21hdGlvbkBncHAuZ3JvdXA6bUEzRWlCZUg5TjgzbVJNNjVKREMtVUpVVUxWSFhmZ1Y3a0x4ZEhDd2I=';


exports.command = function updateTestRun() {
  this.perform((done) => {
    let runID;
    let caseIDArray;

    this.testrail.getRunID((a) => {
      runID = a;
      this.testrail.getCaseIDArray(async (r) => {
        caseIDArray = r;
        // console.log(r.case_ids);
        // console.log(runID);
        // console.log(caseIDArray);

        const options = {
          method: 'POST',
          url: `${url}update_run/${runID}`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: auth,
          },
          body: JSON.stringify({ include_all: false, case_ids: caseIDArray.case_ids }),
        };

        // console.log('\n REQUEST: \n');
        // console.log(options);
        // console.log('\n');

        /*
        rp(options,
          (error) => {
            if (error) {
              //  console.log(error);
            }
          })
          .then((response) => {
            console.log('\n RESPONSE: \n');
            console.log(response);
            console.log('\n');
            done();
          });
        */
        await rp(options,
          (error, response, body) => {
            if (error) {
              //  console.log(error);
            }
            console.log('\n RESPONSE: \n');
            // console.log(response);
            // console.log(body);
            // console.log('\n');
            done();
          });
      });
      // console.log(a);
    });
  });
};
