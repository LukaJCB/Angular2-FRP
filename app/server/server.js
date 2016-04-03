var express = require("express");
var app = express();
app.use("/client", express.static(__dirname + '/../client'));
app.use("/node_modules", express.static(__dirname + '/../../node_modules'));
app.use("/", express.static(__dirname + '/../../static'));
app.listen(3000);
//# sourceMappingURL=server.js.map