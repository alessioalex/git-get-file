# git-get-file

Returns a readable stream with the contents of file (from a git repo) at the specific revision.

## Usage

```js
streamFile(repoPath, { rev: <REVISION>, file: <FILENAME> })
```

Example:

```js
var streamFile = require('git-get-file');
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
```

## Tests

```
npm test
```

## License

MIT
