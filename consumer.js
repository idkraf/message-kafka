const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'docker-consumer',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'docker-group' });

const consumeMessage = async () => {
  await consumer.connect();
  console.log('🚀 Connected as Consumer');

  await consumer.subscribe({ topic: 'docker-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`📥 Received message: ${message.value.toString()}`);
    },
  });
};

consumeMessage().catch(console.error);
