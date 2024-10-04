const fs = require('fs');


fs.readFile('fs/welcome.txt', (err,data) =>{
    if (err) throw err;
    console.log( data.toString());
});
