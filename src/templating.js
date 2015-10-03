var _ = require('lodash');

module.exports = function (id, string, obj,key) {
  var replaceKeys = typeof obj == "object"

  var temp = string.replace(/{.+?}/gi, function (term) {
    if ((!replaceKeys) && obj) {
      if(typeof obj =="function"){
        return key
      }
      return obj
    }
    term=term.slice(1,term.length-1)

    if (obj[term] && replaceKeys) return obj[term];
    return "";
  });

  temp= temp.replace(/id=".+?"/gi, function (value) {
    return 'id="' + id + "_" + value.slice(4, 299)
  });

  return '<div id="'+id+'">'+key+temp+"<br></div>"
};

