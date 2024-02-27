// basic server : hello 반환

// 1. http 모듈을 읽어와서 http 변수에 할당
const http = require("http");
let count = 0;
// 2. 서버 인스턴스: http서버로 요청이 들어오면 해당 요청을 처리할 함수 설정
// 콜백함수는 요청 처리에 사용할 요청과 응답 객체를 인수로 받음
const server = http.createServer((req, res) => {
    log(count);
    // 3. 요청에 대한 상태코드를 200으로 설정.(200: OK, 성공이라는 의미)
    res.statusCode = 200;
    // 4. http 부가 정보를 헤더에 설정할 수 있음. 
    // 여기에서는 콘텐츠타입을 텍스트/플레인(텍스트를 평문으로 해석)으로 설정. 
    res.setHeader("Content-Type", "text/plain");
    // 5. 응답으로 hello를 보내줌
    res.write("hello\n");
    // 6. 2초 동안 기다린 뒤, node.js를 응답하고 http 커넥션 종료
    setTimeout(() => {
        res.end("Node.js");
    }, 2000);
});

function log(count) {
    console.log((count += 1));
}

server.listen(8000, () => console.log("Hello, Node.js!"));