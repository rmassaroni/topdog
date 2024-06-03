"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
// Serve static files from the "public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Define a route to serve the HTML file
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
// Start the server
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
