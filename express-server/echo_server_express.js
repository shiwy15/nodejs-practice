/** node.js library server -> express server REFACTORING 
 * 기존 http 인스턴스의 createServer() 함수 내에서 라우팅 처리를 했지만
 * 익스프레스를 사용하면 더 편리하게 라우팅 기능 사용 가능
*/

// const http = require("http");
const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("기존 라우터 익스프레스로 리팩러링");
});

/** get 메서드의 라우팅 설정 
 * 기존 urlMap으로 url 매핑하는 부분이 사라짐 
 * express에서는 함수들을 하나하나 매핑할 필요 없이 app.get()에 설정 추가 
 */ 
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

/** const에서 function으로 변경
 * 호이스팅을 사용하기 위함
 */
function user (req, res) {
    /** 쿼리 스트링 데이터를 user에 할당 */
    const user = url.parse(req.url, true).query;
    /** 응답을 json으로 변경
     * json 타입으로 볼 수 있고, charset=utf-8을 자동으로 설정해줘서 한글을 간단히 처리 
     * res.end()에는 문자열과 바이트 버퍼 형식만 넣을 수 있음 */
    res.json(`[user] name : ${user.name}, age: ${user.age}`);
};

function feed (req, res) {
    res.json(`
        <ul>
            <li>picture1</li>
            <li>picture2</li>
            <li>picture3</li>
        </ul>
    `);
};
