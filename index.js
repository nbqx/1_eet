var fs = require('fs'),
    through2 = require('through2');
var data = JSON.parse(fs.readFileSync(__dirname+'/leet.json')+'');

function leetMe(str,freq){
  var spl = str.split('');
  var freq = (freq!==undefined)? freq : 0.5;
  var _l_ = function(x){
    var h = data[x.toLowerCase()];
    return (h!==undefined)? 
      ((Math.random()>freq)? h[Math.floor(Math.random()*h.length)] :x) : x;
  };
  return spl.map(function(o){return _l_(o)}).join('')
};

function leet(str){
  return leetMe(str)
};

leet.stream = function(freq){
  return through2(function(c,e,n){
    var ret = leetMe(c.toString(),freq);
    this.push(ret);
    n();
  });
};

module.exports = leet;
