"use strict";

var gitSpawnedStream = require('git-spawned-stream');

function getFile(repoPath, opts) {
  if (!opts || !opts.file) {
    throw new Error('file mandatory');
  }

  var rev  = opts.rev || 'HEAD';
  var args = ["show", rev + ":" + opts.file];

  return gitSpawnedStream(repoPath, args);
}

module.exports = getFile;
