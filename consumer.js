const { Kafka } = require('kafkajs');

// Inisialisasi Kafka
const kafka = new Kafka({
  clientId: 'simple-consumer',
  brokers: ['broker:29092'] // Ganti dengan broker yang sesuai
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const consumeMessage = async () => {
  await consumer.connect();
  console.log('🚀 Connected as Consumer');

  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`📥 Received message: ${message.value.toString()}`);
    },
  });
};

consumeMessage().catch(console.error);
