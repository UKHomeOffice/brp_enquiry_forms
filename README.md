# BRP Application project for nodejs

### Quick start

```bash
$  npm install

```
```bash
$ npm start
```
And browse to `http://localhost:8080` to view the app in your browser


#### Scripts

Start a node daemon (restarts on changes) in development mode with debug on
```bash
$ npm start:dev
```

Run the unit tests
```bash
$ npm run test
```

Lint the codebase against a set of rules defined in .eslintrc
```bash
$ npm run lint
```

Test the codebase against our style rules as defined in .jscsrc
```bash
$ npm run style
```

Analyse the quality of the codebase (for results - open ./resports/plato/index.html)
```
$ npm run plato
```

Compile the CSS
```bash
$ npm run sass
```

- See the ./package.json for a full list of scripts.

- Full list of [environment variables]('./documentation/ENVIRONMENT_VARIABLES.md')
