const ncp = require('ncp').ncp;
ncp.limit = 16;

ncp("src/css", "dist");
ncp("src/html", "dist");