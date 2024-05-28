const mqtt = require('mqtt');

require('dotenv').config();

const client = mqtt.connect(process.env.MQTT);
const infoPrometeus = {};
const topicsPrometeus = ['prometeusNewSensorId03', 'prometeusNewSensorId01'];

client.on('connect', () => {
  client.subscribe(topicsPrometeus[0]);
  client.subscribe(topicsPrometeus[1]);
});

client.on('message', (topic, payload) => {
  if (topic === topicsPrometeus[0]) {
    infoPrometeus.prometeus03 = payload.toString();
  }
  if (topic == topicsPrometeus[1]) {
    infoPrometeus.prometeus01 = payload.toString();
  }

  console.log(infoPrometeus);
});
