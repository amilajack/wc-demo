const fs = require('fs');
const path = require('path');
const bench = require('./bench');

const wc = {
  js: require('./search'),
  neon: require('../native')
};

const ROOT = path.resolve(__dirname, '..');
const DATA = path.resolve(ROOT, 'data');

const string = fs.readFileSync(
  path.resolve(DATA, 'shakespeare-plays.csv'),
  'utf8'
);
const buffer = fs.readFileSync(path.resolve(DATA, 'shakespeare-plays.csv'));

console.log(
  bench(function() {
    return wc.js.search(string, 'thee');
  })
);
console.log(
  bench(function() {
    return wc.neon.search(buffer, 'thee');
  })
);
