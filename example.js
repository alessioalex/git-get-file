"use strict";

var streamFile = require('./');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV || 'master';
var file = process.env.FILE || 'package.json';

streamFile(repoPath, {
  rev: rev,
  file: file
}).on('error', function(err) {
  throw err;
}).on('end', function() {
  console.log('\n------ THE END ------');
}).pipe(process.stdout);
