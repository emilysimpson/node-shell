const fs = require('fs');

const ls = writeFunc => {
	fs.readdir('./', 'utf8', (err, files) => {
	    if (err) {
		throw err;
	    } else {
		writeFunc(files.join('\n'));
	    }
	});

    // if (cmd === 'ls') {
	// fs.readdir('./', 'utf8', (err, files) => {
	//     if (err) {
	// 	throw err;
	//     } else {
	// 	process.stdout.write(files.join('\n'));
	// 	process.stdout.write('prompt > ');
	//     }
	// });
    // }
}

module.exports = ls;
