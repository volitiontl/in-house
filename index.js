var $ = require('jquery');
var _ = require('lodash');
var p = require('bluebird');

var template = require('./src/templating');
var components = require('./src/core_components')
var e = require('./src/event')
var event = new e
var watch = require('./src/syncData')
var router=require('./src/router')


module.exports = {
  render: function (id, json, stage) {
    _.forEach(json, function (value, key) {
      var type = typeof value;
      var sub_id = key;
      if (key.indexOf("_") > 0) {
        type = key.split("_")[1];
        sub_id = key.split("_")[0];
      }
      if (!components[type]) type = typeof value

      var html = template(id + "_" + sub_id, components[type].html, value, key)
      var the_value = components[type].map;
      var final_id = id + "_" + sub_id + "_" + the_value.id;

      var m = {
        id: final_id,
        event: the_value.event,
        valuePath: the_value.valuePath

      };
      if (typeof value == "function") {
        m.func = value
      } else {
        m.obj = json;
        m.prop = key
      }
      event.addListener(m)


      $(html).appendTo("#" + stage);

    }.bind(this));

    event.startListening(stage)
    watch(json, function (_value, _key) {
      var type = typeof _value;
      if (_key.indexOf("_") > 0) {
        type = _key.split("_")[1];
      }
      if (!components[type]) type = typeof _value;
      var _id = id + "_" + _key + "_" + components[type].map.id;
      if(components[type].map.readOnly) return
      document.getElementById(_id)[components[type].map.valuePath] = _value
    })
  },
  addRoute:router.addRoute
}