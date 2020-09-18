const mqtt = require('mqtt');

const client = mqtt.connect({
  host: '127.0.0.1',
  port: 4444,
  protocol: 'mqtt',
});

client.on('connect', () => {
  console.log('connected', client.connected);

  client.subscribe('testTopic', (err) => {
    if (!err) {
      client.publish('testTopic', 'Test Message');
    }
  });
});

client.on('message', (topic, message, packet) => {
  console.log('topic: ', topic);
  console.log('message: ', message.toString());
  console.log('packet: ', packet);

  client.end();
});

client.on('error', (err) => {
  console.error(err.message);
});
