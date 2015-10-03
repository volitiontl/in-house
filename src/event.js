var _ = require('lodash');

function listener() {
  this.events = ["change", "click", "update"];
  this.lookup = {}
}

listener.prototype.startListening = function (stage) {
  _.forEach(this.events, function (event) {
    document.getElementById(stage).addEventListener(event, this.handleEvent.bind(this));
  }.bind(this))
};

listener.prototype.addListener = function (param) {
  this.lookup[param.id + "_" + param.event] = {
    func: param.func,
    obj: param.obj,
    prop: param.prop,
    valuePath: param.valuePath
  }
};


listener.prototype.handleEvent = function (e) {

  if (!e || !e.target || !e.target.id) return;
  var _eventType = e.type;
  var _id = e.target.id;

  if (!this.lookup[_id + "_" + _eventType]) return;

  var t = this.lookup[_id + "_" + _eventType];
  if (t.func) {
    t.func()
  } else {
    t.obj[t.prop] = _.get(e.target, t.valuePath)
  }

};


module.exports = listener;