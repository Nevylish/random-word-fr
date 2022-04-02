'use strict';
const fs = require('fs');
const got = require('got');
const url = 'https://github.com/Taknok/French-Wordlist/blob/master/francais.txt';

got(url, (err, res) => {
	if (err) {
		throw new Error(err);
	}

	fs.writeFileSync('words.txt', res.trim());
});
