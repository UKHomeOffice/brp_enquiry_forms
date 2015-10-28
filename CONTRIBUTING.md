# Contribution guidelines

We welcome patches!

## Commit hygiene

We like to follow the recommendations set out in the GDS [git style guide][gitstyle]
which describes how we prefer git history and commit messages to read.

[gitstyle]: https://github.com/alphagov/styleguides/blob/master/git.md

## JavaScript

We have a JavaScript style checker `npm run style`

All our styles are defined in our [JavaScript style config][jsstyle]

We follow the [Google JavaScript style guide](https://google.github.io/styleguide/javascriptguide.xml)

We also lint our code `npm run lint`.

[jsstyle]: https://github.com/UKHomeOffice/brp_app/blob/master/.jscsrc.json

A pre commit hook is run as part of the project which runs the above checks and our tests (`npm run test`).

## Visual changes

For visual changes, it can be helpful to provide images in your pull-request
showing before and after to highlight the differences.