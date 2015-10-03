var _ = require('lodash');
var $ = require('jquery')

function creator() {
  this.types = {
    boolean: {html: ' <input type="checkbox" id="value" checked="false">', map: {value: "checked"}},
    custom: {html: ' <input type="input" id="value2" checked="false">', map: {value2: "value"}}
  }
}

creator.prototype.addType = function (name, html, valuePath) {
  this.type[name] = {html: html, valuePath: valuePath}
};

creator.prototype.render = function (data, div) {

  _.forEach(data, function (value, key) {
    var type = typeof value;
    if (key.indexOf("_") > 0) {
      type = key.split("_")[1];
    }

    var html = "<h1>hello</h1>"
    if (this.types[type]) {
      html = this.types[type].html;
    }
    $(html).appendTo("#" + div);

  }.bind(this))
}

creator.prototype.update = function (data) {
  _.forEach(data, function (value, key) {
    var type = typeof value;
    var id = key;
    if (key.indexOf("_") > 0) {
      type = key.split("_")[1];
      id = key.split("_")[0];
    }

    console.log("updating ", type, id);

  }.bind(this))


};
module.exports = creator;