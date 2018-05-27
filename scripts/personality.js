// Commands:
//   hi|hello|hey|sup - Greetings!

module.exports = robot => {
  robot.hear(/hi|hello|hey|sup/i, res => {
    res.send('Sup\' yo.');
  });
};
