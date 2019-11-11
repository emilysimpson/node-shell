const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js')

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
    const cmd = data.toString().trim().split(' ');
    eval(`${cmd[0]}(${done}${cmd[1] ? `,${cmd[1]}` : ``})`);

    // pwd(cmd[0]);
    // ls(cmd[0]);
    // cat(cmd[0], cmd[1]);
    // curl(cmd[0], cmd[1]);
});

const done = output => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}