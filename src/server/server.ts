import * as express from "express"

let app = express();
app.use("/client",express.static( __dirname + '/../client'));
app.use("/node_modules",express.static(__dirname + '/../../node_modules'));
app.use("/",express.static(__dirname + '/../../static'));



app.listen(3000);