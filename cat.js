const fs = require('fs');

const cat = (writeFunc, path) => {
	fs.readFile(path, 'utf8', (err, data) => {
	    if (err) {
		throw err;
	    } else {
		writeFunc(data);
	    }
	});
    }
}

module.exports = cat;

