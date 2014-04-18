var fs = require('fs');
var leet = require('.');

var freq = 0.0;
console.log(leet('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', freq));

// stream
fs.createReadStream(__filename)
  .pipe(leet.stream())
  .on('data',function(data){ console.log(data+'')});
