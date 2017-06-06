# Chromecast Sample App

To make it run:
```bash
$ yarn
$ yarn start
```

For the sake of simplicity, there's no build step or anything, just an express app serving two static
folders, one contains the receiver app, and the other one the sender app.

In order to make it query the Twitter API, you need to get the keys from the dev twitter page first,
then create a `.env` based on the `example.env`, and plug your Twitter generated keys.
