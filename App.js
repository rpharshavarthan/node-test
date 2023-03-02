const os = require('os');
const info = os.userInfo();

console.log(info);
console.log(os.uptime());

const detail = {
    name: os.type(),
    release: os.release(),
    tot_memory: os.totalmem(),
    free_memory: os.freemem()
};

console.log(detail);