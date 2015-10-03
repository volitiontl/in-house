var lookup = {
  boolean: {
    html: '<input type="checkbox" id="abc">', map: {
      id: "abc",
      event: "click",
      valuePath: "checked"
    }
  },
  string: {
    html: '<input type="input" id="abc">', map: {
      id: "abc",
      event: "change",
      valuePath: "value"
    }
  },
  number: {
    html: '<input type="input" id="abc">', map: {
      id: "abc",
      event: "change",
      valuePath: "value"
    }
  },
  function: {
    html: '<button id="abc">{value}</button>', map: {
      id: "abc",
      event: "click"
    }
  },
  file: {
    html: '<input type="file" id="abc" >{value}</input>', map: {
      id: "abc",
      event: "change",
      valuePath: "value",
      readOnly: true
    }
  },
  folder: {//node webkit only, todo clean this up
    html: '<input type="file" id="abc" nwdirectory>{value}</input>', map: {
      id: "abc",
      event: "change",
      valuePath: "value",
      readOnly: true
    }
  }


};


module.exports = lookup;