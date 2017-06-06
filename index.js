if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const socket = require('socket.io');
const Twitter = require('twitter');

const {
    PORT,
    CONSUMER_KEY,
    CONSUMER_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET
} = process.env;

const twitter = new Twitter({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET
});

app.use(express.static('public'));
app.use('/chromecast', express.static('public-chromecast'));

const server = app.listen(PORT || 3000, function() {
    console.log(`Sever started in http://localhost:${PORT}`);
});
const io = socket.listen(server);

twitter.stream('statuses/filter', { track: process.env.TRACK_SUBJECT || 'javascript' }, function(stream) {
  stream.on('data', function (data) {
      io.sockets.emit('tweet', data);
  });
});
