"use strict";

var proxyquire = require('proxyquire');
var should = require('should');

describe('git-get-file', function() {
  it('should delegate correctly', function(done) {
    var rev = 'master';
    var repoPath = '/home/node.git';
    var file = 'package.json';

    var streamFile = proxyquire.load('./', {
      'git-spawned-stream': function(path, args) {
        path.should.eql(repoPath);
        args.should.eql(['show', rev + ':' + file]);

        done();
      }
    });

    streamFile(repoPath, { rev: rev, file: file });
  });
});
