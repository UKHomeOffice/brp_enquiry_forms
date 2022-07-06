import os
import requests
import json

ZAP_HOST = os.environ.get('ZAP_HOST') or 'localhost'
ZAP_PORT = os.environ.get('ZAP_PORT') or 8090
CONTEXT_NAME = os.environ.get('CONTEXT_NAME') or 'test'

header = {
    'Accept': 'application/json',
    'X-ZAP-API-Key': None
}

try:
    context = {
        'contextName': CONTEXT_NAME
    }

    requests.get('http://' + ZAP_HOST + ':' + str(ZAP_PORT) + '/JSON/context/action/newContext', params=context,
                 headers=header
                 )

    site = requests.get('http://' + ZAP_HOST + ':' +
                        str(ZAP_PORT) + '/JSON/core/view/sites/', headers=header)

    siteJson = site.json()

    print(siteJson)
    visited = requests.get('http://' + ZAP_HOST + ':' + str(ZAP_PORT) + '/JSON/core/view/urls/', params={
        'baseUrl': siteJson.get('sites')[0]
    }, headers=header)

    visitedJson = visited.json()

    for url in visitedJson.get('urls'):
        print(url)
        requests.get('http://' + ZAP_HOST + ':' + str(ZAP_PORT) + '/JSON/context/action/includeInContext/',
                     params={
            'contextName': CONTEXT_NAME,
            'regex': url
        }, headers=header)
except requests.exceptions.RequestException as e:
    print(e)
