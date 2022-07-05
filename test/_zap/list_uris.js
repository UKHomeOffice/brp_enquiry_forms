const axios = require('axios').default;

const ZAP_HOST = process.env.ZAP_HOST || 'localhost';
const ZAP_PORT = process.env.ZAP_PORT || 8090;
const CONTEXT_NAME = process.env.CONTEXT_NAME || 'test';


const listURIs = async () => {
  const context = {
    contextName: CONTEXT_NAME
  };
  await axios({url: `http://${ZAP_HOST}:${ZAP_PORT}/JSON/context/action/newContext`,
    method: 'GET', params: context}).catch(err => console.log(err));

  const site = await axios.get(`http://${ZAP_HOST}:${ZAP_PORT}/JSON/core/view/sites/?`).catch(err => console.log(err));
  const siteJson = site.data;

  const visited = await axios(`http://${ZAP_HOST}:${ZAP_PORT}/JSON/core/view/urls/?baseurl=${siteJson.sites[0]}`)
    .catch(err => console.log(err));

  const visitedJson = visited.data;

  visitedJson.urls.forEach(async element => {
    await axios({url: `http://${ZAP_HOST}:${ZAP_PORT}/JSON/context/action/includeInContext/`, method: 'GET',
      params: {
        contextName: CONTEXT_NAME,
        regex: element
      }}).catch(err => console.log(err));
  });
};

listURIs();
