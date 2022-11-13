

//node module

const os = require('os')

//info on user
const user = os.userInfo()
console.log(user);

//info oon uptime
console.log(`the current uptime is ${os.uptime()} second`);

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs);
