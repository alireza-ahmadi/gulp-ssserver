# Gulp-SSServer
`gulp-ssserver` is a super simple static web server for Gulp workflows with livereload
capabilities. This module built for personal use and published as a public module
for ease of use in the development process.

## Usage
`ssserver` has a simple API. You can pass two arguments to it, first argument defines
the **port** and second argument defines the **hostname** that server listens on.
Both arguments are optional.

```js
var ssserver = require('gulp-ssserver');
...
gulp.task('server', function() {
   gulp.src('./path/to/serve/and/watch')
      .pipe(ssserver());
   // Server will start listening on 127.0.0.1:9000
   // You can set hostname and port by replacing last line with the follow line
   // .pipe(ssserver(18200, '0.0.0.0'));
});
```

Feel free to submit a pull request if you have an idea for improving this module ;)
