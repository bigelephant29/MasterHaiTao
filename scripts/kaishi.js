module.exports = function(robot) {
  robot.hear(/^求開釋$/, function(response) {
    var fs = require('fs');
    fs.readFile('data/haitaokaishi.txt', function(err, data){
      if(err){
        return console.log(err);
      }
      var res = data.toString().split('\n');
      var choose = Math.floor(Math.random() * res.length);
      response.send(res[choose]);
    });
  });
}
