// Dependencies:
//   HUBOT_GITHUB_TOKEN - GitHub access token for communicating with the GitHub API
//
// Commands:
//   hubot issue create <title> body <body> - Submit an idea for Paul as an issue, so meta!
//
// Notes:
//   Issues will be created by the user account of whomever the GitHub token belongs to.

module.exports = robot => {
  const github = require('githubot')(robot);

  github.handleErrors(response => {
    console.error(response);
  });

  robot.respond(/issue create (.+) body (.+)/i, res => {
    const who = res.message.user.real_name;
    const title = res.match[1];
    const body = res.match[2];
    const params = {
      title,
      body: `${title}\n\nCreated by ${who} via hubot\n\n${body}`,
      labels: ['from-hubot']
    };
    github.post('https://api.github.com/repos/thenexustv/paul/issues', params, issue => {
      const text = `Thanks for the feedback, I created an issue for you\n${issue.html_url}`;
      res.reply(text);
    });
  });
};
