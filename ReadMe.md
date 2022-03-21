# Ginza WEB

### NPM
* > npm install
* > npm start

### Simple Docker Command
* > docker-compose build
* > docker-compose up -d
* > docker ps 
* > docker-compose down 

### ngrok tunnels to localhost
ngrok 사용법
* > ngrok.com 가입 후(이메일 확인 필수) 
https://dashboard.ngrok.com/get-started/setup
* > 2. Connect your account 에서 제공되는 ngrok authtoken {NGROK_AUTHTOKEN} 값을 환경 변수로 지정
* > docker-compose up -d 후 
localhost:4040 들어가면 임의로 생성되는 ngrok 주소로 접속해볼 수 있습니다. 
* > 예시) https://aaaa-255-255-255-255.ngrok.io
