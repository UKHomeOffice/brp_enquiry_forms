## Environment Variables

* `PORT` server port.
* `SESSION_SECRET` session secret.
* `SESSION_TTL` number of seconds before session expires.
* `REDIS_PORT` redis port.
* `REDIS_HOST` redis host.
* `LISTEN_HOST` the host to listen on.
* `NODE_ENV` the application will log with lots of debug when it's set to 'development'. No default.

### Email service environment variables
(Will be removed from the app when the email service is created)

* `CASEWORKER_ERROR_EMAIL` caseworker email for the correct-mistakes journey.
* `CASEWORKER_LOSTSTOLEN_EMAIL` caseworker email for the lost-stolen journey.
* `CASEWORKER_DELIVERY_EMAIL` caseworker email for the not-arrived journey.
* `EMAIL_PORT` email port.
* `EMAIL_HOST` smtp host.
* `SMTP_USER` smtp username.
* `SMTP_PASSWORD` smtp password.
* `FROM_ADDRESS` email address to send from.
