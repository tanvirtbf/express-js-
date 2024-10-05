"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello !');
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});