const generator = require('generate-password');

var password = generator.generate({
    length: 12,
    numbers: true,
    //symbols: true,
    //strict: true
})

console.log(password);