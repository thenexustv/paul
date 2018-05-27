// Commands:
//   hi|hello|hey|sup - Greetings!

module.exports = robot => {
  robot.hear(/(hi|hello|heyo?|sup)(?:\s|$)/i, res => {
    const greeting = res.match[1].charAt(0).toUpperCase() + res.match[1].slice(1);
    if (Math.random() > 0.97) {
      res.send(`${greeting} ${res.message.user.real_name}! :smile: Nice to see you!`);
    }
  });
};
