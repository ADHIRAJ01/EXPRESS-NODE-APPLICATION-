const path = require('path');
console.log(path.basename('C:\\temp\\myfile.html'));        //returns basename of whole file
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.basename('/foo/bar/baz/asdf/quux.html','.html'));      //path.basename(path[, ext])= ext is optional is gives output without giving that extension
console.log(process.env.PATH.split(path.delimiter));
//process.env.PATH -> it gives PATH
//path.delimeter -> it delimiter , differentiates the path
console.log(path.dirname('/foo/bar/baz/asdf/quux'));
console.log(path.extname('/foo/bar/baz/asdf/quux.html'));
path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
  });

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));        // JOIN -> joins all the path
console.log(path.isAbsolute('/foo/bar')); // returns boolean  if path is absolute or not
console.log(path.parse('/home/user/dir/file.txt'));     //parse the file and give all details