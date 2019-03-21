import _ from 'lodash';
import nodeDashButton from 'node-dash-button';
import dotenv from 'dotenv';
import aws from 'aws-sdk';

import { dashButtonMap } from '../.sns-config';

aws.config.update({ region: process.env.AWS_REGION });
dotenv.config();

let sns = new aws.SNS();

var dashButton = nodeDashButton(Object.keys(dashButtonMap), null, null, 'all');

dashButton.on('detected', dashId => {
  var message = _.get(dashButtonMap, dashId);
  sns.publish(
    {
      Message: message,
      TopicArn: process.env.TOPIC_ARN
    },
    (err, data) => {
      if (err) console.error(err);
      else console.log(data);
    }
  );
});
