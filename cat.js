const fs = require('fs');

const cat = (cmd, path) => {
    if (cmd === 'cat') {
	fs.readFile(path, 'utf8', (err, data) => {
	    if (err) {
		throw err;
	    } else {
		process.stdout.write(data);
		process.stdout.write('\nprompt > ');	
	    }
	});
    }
}

module.exports = cat;

