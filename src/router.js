//route lookup
var urlTable = {};

window.location.hash = ""
var currentUrl = window.location.hash.slice(1);

//add new routes
var addRoute = function (name, enterFunc, exitFunc) {
  urlTable[name] = {
    enter: enterFunc,
    exit: exitFunc
  }
};

//todo replace this with an event eventually.
//check the url every 50 milliseconds
function watchUrlChange() {
  var newUrl = window.location.hash.slice(1);
  if (newUrl !== currentUrl) {
    if (urlTable[currentUrl]) {
      if (urlTable[currentUrl].exit) urlTable[currentUrl].exit();
    }
    if (urlTable[newUrl]) {
      if (urlTable[newUrl].enter) urlTable[newUrl].enter();
    }
    currentUrl = newUrl;
  }
}
setInterval(watchUrlChange, 50);

module.exports = {addRoute: addRoute}