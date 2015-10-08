#BRP Acceptance Tests

The tests follow the standard principles of feature files and step definitions.

A lot of the step definitons are reused across the feature files as the forms themselves share a lot of the same fields and pages.

Going further than this there is also a file of parameterised step definitons that pass in values from the feature files themselves, these are located in `step_definitions/ParameterisedStepDefinitons_.rb`

##Installation:

###Install Bundler

```
gem install bundler
```

###Bundle install the Gem file

cd to the acceptance_tests folder

```
bundle install
```

##Run:

Run with
```
cucumber
```
or to run specific features:
```
cucumber features/example.feature
```

You can also run/install the tests from the root of the project using npm
```
npm run test:acceptance
```

##Yard:

Using YARD-Cucumber you can generate documentation on the features, tags and step definitions used in these tests

###Run
Running the following from outside the acceptance_tests folder generates the documentation
```
yardoc 'features/**/*.rb' '**/*.feature'
```
Then run the following to start the local documentation server
```
yard server
```