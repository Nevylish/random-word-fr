'use strict';
const fs = require('fs');
const got = require('got');
const url = 'https://raw.github.com/atebits/Words/master/Words/fr.txt';

got(url, (err, res) => {
	if (err) {
		throw new Error(err);
	}

	fs.writeFileSync('words.txt', res.trim());
});
