'use strict';

var modelParams = {
  parameter1: 'Value 1',
  parameter2: 'Value 2',
  booleanParam: false,
  numericParam: 123.12,
  sender: "brett@bdb-studios.co.uk",
  recipient: 'brett.minnie@gmail.com',
  subject: 'Test Email'

};

var testKey = global.testUid();
var model = new (require('../../models/delivery'))(modelParams);

describe('Model initialisation', function () {
  // Do our objects match
  it('The model should be initialised with ' + Object.keys(modelParams).length + ' parameters', function() {
    expect(model.attributes).to.be.an('object');
    expect(model).to.have.property('attributes');
    expect(Object.keys(modelParams).length).to.equal(
      Object.keys(modelParams).length
    );
    expect(model.attributes).to.deep.equal(modelParams);
  });

  // Loop through each object in our test params and get and compare it
  Object.keys(modelParams).forEach(function(key) {
    it('The model should have an attribute called ' + key + ' with a value of ' + modelParams[key], function() {
      expect(model.get(key)).to.equal(modelParams[key]);
    });
  });

  // Can we add/assign an attribute
  it('The model should not have a key called ' + testKey + ', I can create and assign to it', function() {
    var expected = global.testUid();
    expect(model.get(testKey)).to.equal(undefined);
    model.set(testKey, expected);
    expect(model.get(testKey)).to.equal(expected);
  });

  //Can we send an email
  it('When we save the model it should send an email', function() {
    model.save();
  })
});
