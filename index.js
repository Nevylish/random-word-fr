'use strict';
const fs = require('fs');
const uniqueRandomArray = require('unique-random-array');
const wordListPath = __dirname + '/words.txt';

module.exports = uniqueRandomArray(fs.readFileSync(wordListPath, 'utf8').split('\n'));
