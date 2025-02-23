# INSTALATION
## CLONE REPO
```
git clone https://github.com/idkraf/message-kafka.git
```

## INSTALL KAFKAJS
```
npm install kafkajs
```

## Jalankan Kafka dan zookeper in docker
- install docker in windows
```
https://docs.docker.com/desktop/setup/install/windows-install/
```
- cek docker version
```
docker --version
```
- Jalankan docker dan pastikan statusnya Running
- di terminal vscode
```
docker-compose up -d
```
- cek jika kafka dan zookeeper sudah berjalan
```
docker ps
```


## TRIAL node on terminal
- Jarankan Consumer terlebih dulu di terminal pertama vscode
```
node consumer.js
```
- Jarankan Producer di terminal kedua vscode
```
node consumer.js
```
- Jika consumer berhasil maka
```
📥 Received message: Hello from Docker Producer!
```

## TRIAL in Docker
- Masuk ke container Kafka untuk melihat daftar topik:
```
docker exec -it kafka /bin/bash
```
- Buat topik
```
kafka-topics.sh --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
```
- lihat daftar topic
```
kafka-topics.sh --list --bootstrap-server localhost:9092
```
- Jalankan Producer (untuk mengirim pesan)
```
kafka-console-producer.sh --topic test-topic --bootstrap-server localhost:9092
```
- Jalankan Consumer (untuk penerima pesan)
```
docker exec -it kafka kafka-console-consumer.sh --topic test-topic --from-beginning --bootstrap-server localhost:9092
```
- jika ingin hentikan semua container  atau docker compose
```
docker-compose down
```

## TROUBLESHOOTING
- Error connection refused: pastikan docker kafka sudah berjalan (docker ps)
- Topic not found: pastikan topik sudah di buat menggunakan perintah:
```
docker exec -it <container_id_kafka> kafka-topics.sh --list --bootstrap-server localhost:9092
```
- Group ID error: maka ganti groupId di consumer.js jika sudah digunakan
- Port sudah digunakan: maka ganti port di docker-compose.yml
- Karka tidak bisa terhubung: Pastikan konfigurasi KAFKA_ADVERTISED_LISTENERS sesuai dengan IP?host dari mesin kamu
