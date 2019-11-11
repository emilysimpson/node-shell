const pwd = cmd => {
    if (cmd === 'pwd') {
	process.stdout.write(process.env.PWD);	
    }
    process.stdout.write('\nprompt > ');
}

module.exports = pwd;
