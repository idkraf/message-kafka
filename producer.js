const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'docker-producer',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

const produceMessage = async () => {
  await producer.connect();
  console.log('🚀 Connected as Producer');

  await producer.send({
    topic: 'docker-topic',
    messages: [{ value: 'Hello from Docker Producer!' }],
  });

  console.log('✅ Message sent successfully');
  await producer.disconnect();
};

produceMessage().catch(console.error);
