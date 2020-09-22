# Node.js와 MQTT 연결 POC

- mqtt-server와 mqtt-client 둘 다 npm i 명령어로 node_modules를 설치

## 1. Server(Mosca)

- mqtt-server 루트에서 npm start로 프로그램 실행

- 4444번 포트에서 Client 연결 확인 및 Publish 데이터 확인

## 2. Client(MQTT)

- mqtt-client 루트에서 npm start로 프로그램 실행

- testTopic으로 구독 설정

- testTopic으로 Test Message 데이터 전송

- Mosca 서버에서 데이터 도착 확인 후 프로그램 종료
