## Environment Variables

* `PORT` server port. Defaults to 8080.
* `SESSION_SECRET` session secret.
* `SESSION_TTL` number of seconds before session expires.
* `REDIS_PORT` redis port. Defaults to 6379.
* `REDIS_HOST` redis host. Defaults to '127.0.0.1'.
* `LISTEN_HOST` the host to listen on. Defaults to '0.0.0.0'.
* `NODE_ENV` the application will log with lots of debug when it's set to 'development'. No default.

### Email service environment variables
(Will be removed from the app when the email service is created)

* `CASEWORKER_EMAIL` email for caseworker. Defaults to broken 'caseworker_email_address'.
* `EMAIL_PORT` email port. Defaults to 587.
* `EMAIL_HOST` smtp host. Defaults to 'email-smtp.eu-west-1.amazonaws.com'.
* `SMTP_USER` smtp username. Defaults to ''.
* `SMTP_PASSWORD` smtp password. Defaults to ''.
* `FROM_ADDRESS` email address to send from. Defaults to 'brp@dsp.notprod.homeoffice.gov.uk'
