import os
import requests
import datetime

date = datetime.datetime.now()

header = {
    'Accept': 'application/json',
    'X-ZAP-API-Key': None
}

ZAP_HOST = os.environ.get('ZAP_HOST') or 'localhost'
ZAP_PORT = os.environ.get('ZAP_PORT') or 8090
CONTEXT_NAME = os.environ.get('CONTEXT_NAME') or 'test'
cwd = os.getcwd()
print(cwd)

reportParams = {
    'title': 'test report for build pipeline poc',
    # Defaults are:
    # "traditional-pdf",
    # "traditional-json",
    # "traditional-md",
    # "traditional-xml",
    # "traditional-html",
    # "modern",
    # "high-level-report",
    # "risk-confidence-html",
    # "traditional-json-plus",
    # "traditional-html-plus"
    # But custom templates can be made
    'template': 'high-level-report',
    'theme': '',
    'description': 'test report for drone POC',
    'contexts': CONTEXT_NAME,
    # Not needed as we use a context instead of list of sites
    'sites': '',
    'sections': '',
    # i.e. "False Positive", "Low", "Medium", "High", and "Confirmed" leave empty for all
    'includedConfidences': '',
    # i.e. "Informational", "Low", "Medium", and "High". leave empty for all
    'includedRisks': '',
    'reportFileName': 'test-report-for-drone-POC-' +
    str(date.day) + '-' + str(date.month) + '-' + str(date.year),
    # Not too relevant as we can use date lib in python
    'reportFileNamePattern': '',
    'reportDir': '',
    # Should we display the report after generating
    'display': True
}

try:
    resp = requests.get('http://' + ZAP_HOST + ':' + str(ZAP_PORT) +
                        '/JSON/reports/action/generate/', params=reportParams, headers=header)
    print(resp.json())

except requests.exceptions.RequestException as e:
    print(e)
