//server.js
//PORT = 3000

const express = require('express');
const path = require("path");
const app = express();
const PORT = 3000;

// app.use(express.static('./static'));
app.use(express.static("./dist"));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./dist/index.html"));  // ?????
// });

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});







// const express = require("express");
// const path = require("path");
// const app = express();

// app.use(express.static("./dist"));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./dist/index.html"));
// });

// app.listen(process.env.PORT || 3000, () =>
//   console.log("server is now running.")
// );

// const express = require('express');
// const app = express();
// app.get('/*', (req, res) => {
//   res.sendFile(__dirname+"/index.html");
// })
// app.listen(process.env.PORT || 3000, () => console.log("server is now running."));