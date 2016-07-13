module.exports = function(robot) {
  robot.hear(/真的/, function(response) {
    response.send('假的');
  });
}
