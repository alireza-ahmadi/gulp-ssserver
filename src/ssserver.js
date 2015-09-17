import path from 'path';
import {lstatSync as stat} from 'fs';
import through from 'through';
import express from 'express';
import livereload from 'livereload';
import {parallel} from 'async';

function staticServer(hostname, port, folderPath) {
  return () => {
    const app = express();

    app.use(express.static(folderPath));
    app.listen(port, hostname);
  }
}

function livereloadServer(folderPath) {
  return () => {
    const server = livereload.createServer();
    server.watch(folderPath);
  }
}

function normalizePath(givenPath) {
  let folderPath = givenPath;

  let stats = stat(folderPath);
  if (stats.isFile()) {
    folderPath = path.dirname(folderPath);
  }

  return folderPath;
}

export default function ssserver(port = 9000, hostname = '127.0.0.1') {
  return through((file) => {
    let folderPath = normalizePath(file.path);
    parallel([livereloadServer(folderPath),staticServer(hostname, port, folderPath)]);
  })
}
