module.exports = function(robot) {
  robot.hear(/怎麼辦/, function(response) {
    response.send('哎呀！你的眼睛業障重啊！！！');
  });
}
