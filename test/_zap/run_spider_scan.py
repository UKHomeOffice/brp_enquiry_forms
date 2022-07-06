import os
import requests

ZAP_HOST = os.environ.get('ZAP_HOST') or 'localhost'
ZAP_PORT = os.environ.get('ZAP_PORT') or 8090
CONTEXT_NAME = os.environ.get('CONTEXT_NAME') or 'test'

header = {
    'Accept': 'application/json',
    'X-ZAP-API-Key': None
}

try:
    formData = {
        'contextName': CONTEXT_NAME,
        'maxChildren': 0,
        'recurse': True,
        'subtreeOnly': True
    }

    scanStart = requests.get('http://' + ZAP_HOST + ':' + str(ZAP_PORT) + '/JSON/spider/action/scan',
                             params=formData, headers=header)

    scanID = scanStart.json().get('scan')

    print(scanID)

    percentageComplete = 0
    resp = None

    while(int(percentageComplete) < 100):
        resp = requests.get('http://' + ZAP_HOST + ':' + str(ZAP_PORT) + '/JSON/spider/view/status/?', params={
            'scanId': scanID
        },
            headers=header)

        print('Spider scan percentage complete: ' +
              str(percentageComplete) + '%')
        percentageComplete = resp.json().get('status')

        # show final 100% completion
    print('Spider scan percentage complete: ' + percentageComplete + '%')

    scanResults = requests.get('http://' + ZAP_HOST + ':' + str(ZAP_PORT) + '/JSON/spider/view/fullResults/',
                               params={
                                   'scanId': scanID
    }, headers=header)

    for scannedUrl in scanResults.json().get('fullResults')[0].get('urlsInScope'):
        print('url:' + scannedUrl.get('url') + ' |  status code: ' +
              str(scannedUrl.get('statusCode')))

except requests.exceptions.RequestException as e:
    print(e)
