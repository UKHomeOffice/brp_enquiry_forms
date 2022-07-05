const request = require('request');

const ZAP_HOST = process.env.ZAP_HOST || 'localhost';
const ZAP_PORT = process.env.ZAP_PORT || 8090;


const listURIs = () => {
  request.get(`http://${ZAP_HOST}:${ZAP_PORT}/JSON/core/view/sites/?`, (err, resp, body) => {
    if(err) {
      console.log(err);
    }
    const siteJson = JSON.parse(body);

    request(`http://${ZAP_HOST}:${ZAP_PORT}/JSON/core/view/urls/?baseurl=${siteJson.sites[0]}`,
      (siteErr, siteResp, siteBody) => {
        if(siteErr) {
          console.log(siteErr);
        }
        const visitedJson = JSON.parse(siteBody);

        visitedJson.urls.forEach(element => {
          console.log(element);
        });
      });
  });
};

listURIs();
