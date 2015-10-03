var _=require('lodash');
var oldJSON="";
var json;
var changed_func=function(){};

function watchData(){
  if (JSON.stringify(json) !== oldJSON) {

    _.forEach(json, function (value, key) {
      changed_func(value, key)
    }.bind(this));
    oldJSON = JSON.stringify(json);
  }
}


var watch=function(data,func){
  json=data;
  changed_func=func;
  setInterval(watchData,50)
  _.forEach(json, function (value, key) {
    changed_func(value, key)
  }.bind(this));
  oldJSON = JSON.stringify(json);
};


module.exports=watch;