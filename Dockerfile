FROM node:8-slim
MAINTAINER Brian Mitchell <bman4789@gmail.com>

# make user for bot
# yo requires uid/gid 501
RUN groupadd -g 501 hubot && \
  useradd -m -u 501 -g 501 hubot

COPY . /opt/paul

# make directories and files
RUN chown -R hubot:hubot /opt/paul

USER hubot
WORKDIR /opt/paul

RUN npm install

ENTRYPOINT ./bin/hubot
