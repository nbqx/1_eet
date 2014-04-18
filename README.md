## 1_eet

[Leet(en)](http://en.wikipedia.org/wiki/Leet) is an alternative alphabet for the English language that is used primarily on the Internet.

[Leet(ja)](http://ja.wikipedia.org/wiki/Leet) は、主に英語圏のパソコン通信や、インターネットの電子掲示板などで使われるラテン文字の表記法である。

## usage

```js
var fs = require('fs');
var leet = require('1_eet');

console.log(leet('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',0.0));

// stream
fs.createReadStream(__filename)
  .pipe(leet.stream())
  .on('data',function(data){ console.log(data+'')});

```

output:

    ^/eque p<>r.-o (_,)u1squ4m ës-|- ()_ui |}pelorem !psu[V] ()_v3y3/-\ I>[]lpr si+ @]\/[3+, ©0n2e¢-|-|=-7u2, adi|7isci |/elit
    |/(Lr fz = |93<|uire('fs');
    \|aye® []_eet = 2e0_(_)ir[-('.');
     
    var f|`eq = 0.0;
    c[]ens<>l£.lØg(£e37('N£0_ue |ºor|?oh qµisqบa//\ [-es† qu/me do|o®£]\/[ ]|"sบm qu14 dolØr esi"|" a|v|£+, co^s€¢te"|"(_)r, ayedeyep][sci v€7it', fr|=-q));
    |=s.[reate|2€/-\dStr3a(\/)(__f/mel&n@m&)
      .p¡pë(|_eë-|-.stream())
      .o|\|('da"|"/\',/=un<t1p[](da+a){ ¢ons<>l£.lpg(da']['aye+'')});
