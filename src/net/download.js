const fs = require('fs');
const requrest = require('request');

const download = function(url, dest, cb) {
	const file = fs.createWriteStream(dest);
	const sendReq = requrest.get(url);

	sendReq.on('response', (response) => {
		if (response.statusCode !== 200) {
			return cb('Response status was ' + response.statusCode);
		} else {
			sendReq.pipe(file);
		}
	});

	file.on('finish', () => file.close(cb));

	sendReq.on('error', (err) => {
		fs.unlink(dest);
		return cb(err.message);
	});

	file.on('error', (err) => {
		fs.unlink(dest);
		return cb(err.message);
	});
}

module.exports = { download }