# Amazon Dash Button SNS

See `node-dash-button` for dash button setup.

## Installing dependencies

`node-dash-button` has its own instructions on installing its dependencies, so be sure to follow that first.

Afterwards, run `npm install` to install the other dependencies for this project.

## Configuring Environment Variables

Add a file in the root directory `.env` with your AWS region and SNS topic arn.

```
AWS_REGION=us-weast-0
TOPIC_ARN=arn:aws:sns:us-weast-0:123456789012:hello-world
```

## Configuring MAC addresses and SNS Messages

Add a file in the root diretory `.sns-config.js`

```
const dashButtonMap = {
  'a1:b2:c3:d4:e5:d6': "Hi, Mom!"
  '00:b2:c3:d4:e5:d6': "Hi, Dad!"
};

export { dashButtonMap };
```

Configure as many MAC addresses as desired, each with its own message to be published to the topic arn.

## Usage

After finishing configuration, you can start the node server:

`npm start`

# Development

PR's are welcome! Feel free to open issues as well.
