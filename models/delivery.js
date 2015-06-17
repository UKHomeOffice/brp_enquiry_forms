'use strict';

var DeliveryModel = function DeliveryModel(attr) {
  this.attr = attr;
};

DeliveryModel.prototype = {

  get: function get(key) {
    if (key in this.attr) {
      return this.attr[key];
    }

    return null;
  },

  set: function set(key, value) {
    this.attr[key] = value;
  },

  save: function save() {

  }
};

module.exports = DeliveryModel;

