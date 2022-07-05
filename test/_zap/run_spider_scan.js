const axios = require('axios').default;

const ZAP_HOST = process.env.ZAP_HOST || 'localhost';
const ZAP_PORT = process.env.ZAP_PORT || 8090;
const CONTEXT_NAME = process.env.CONTEXT_NAME || 'test';


const runSpiderScan = async () => {
  const formData = {
    contextName: CONTEXT_NAME,
    maxChildren: 0,
    recurse: true,
    subtreeOnly: true
  };

  const scanStart = await axios({url: `http://${ZAP_HOST}:${ZAP_PORT}/JSON/spider/action/scan`, method: 'GET',
    params: formData}).catch(err => console.log(err));

  console.log(scanStart.data);
  const scanID = scanStart.data.scan;

  console.log(scanID);

  let percentageComplete = 0;
  let resp = undefined;

  while(percentageComplete < 100) {
    resp = await axios({url: `http://${ZAP_HOST}:${ZAP_PORT}/JSON/spider/view/status`, method: 'GET',
      params: formData});
    console.log(`Spider scan percentage complete: ${percentageComplete}%`);
    percentageComplete = resp.data.status;
  }

  // show final 100% completion
  console.log(`Spider scan percentage complete: ${percentageComplete}%`);

  const scanResults = await axios({url: `http://${ZAP_HOST}:${ZAP_PORT}/JSON/spider/view/fullResults/`,
    method: 'GET',
    params: {
      scanId: scanID
    }}).catch(err => console.log(err));

  scanResults.data.fullResults[0].urlsInScope.forEach(element => {
    console.log('url: ' + element.url + ' status code: ' + element.statusCode);
  });
};

runSpiderScan().then(() => console.log('done')).catch(err => console.log(err));
