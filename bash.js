const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
    const cmd = data.toString().trim().split(' ');
    
    pwd(cmd[0]);
    ls(cmd[0]);
    cat(cmd[0], cmd[1]);
});
