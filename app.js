console.log('starting app');

const fs = require('fs');
const os = require('os');


var user = os.userInfo();
console.log(user);


fs.appendFile('text.txt', 'hello ' + user.username + '!', (err)=>{
    if(err){
        console.log(error);
    }
});