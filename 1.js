//  const fs = require("fs");

//  fs.writeFile('heihei',"你真的很好嘛",function(err){
// 	if(err){
// 		console.log(err);
// 	}
// 	console.log('成功了');
//  });



var http = require('http');
var server = http.createServer(function(request,response){
    response.write("你好");
    response.end();
});
server.listen('9000',function(err){
    if(err){
        console.log('失败'+err);
    }
    console.log('http://localhost:9000');
});


// Array.prototype.unique = function() {
//     var arr = [], hash = {};
//     this.forEach(function(v) {
//       var type = typeof(v);
//       hash[v] || (hash[v] = new Array())
//       if(hash[v].indexOf(type) < 0) {
//         // hash[v] = true;
//         hash[v].push(type);
//         arr.push(v);
//       }
//     })
//     return arr;
//   }
//   var a = [1,2,4,34, 2, "1", "4"];


//   var b = a.unique();
//   console.log(b);