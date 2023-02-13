var fs = require('fs');

fs.readFile('nodejs/sample.txt', 'utf-8', (err, data)=>{
    console.log(data);
});