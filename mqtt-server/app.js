const mosca = require('mosca');

const app = new mosca.Server({
  port: 4444,
});

app.on('clientConnected', (client) => {
  console.log('client connected: ', client.id);
});

app.on('published', (packet, client) => {
  console.log('published: ', packet.payload);
});

app.on('ready', () => {
  console.log('4444번 포트에서 MQTT 서버 대기 중...');
});
