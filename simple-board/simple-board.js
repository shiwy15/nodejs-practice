/** 심플 게시판 API
 * DB연결 X, 메모리 기반 동작하는 휘발성 게시판
 */

const express = require("express");
const app = express();
let posts = [];     // 게시글(post) 리스트

app.use(express.json()); // json 미들웨어 활성화

/** 컨텐트 타입에 따른 파싱
 * applicaation/x-www-form-urlencoded 인 경우 파싱
 * body에 키=값&키=값 형태를 가진 데이터를 말함. 대부분의 POST요청.
 */
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.json(posts);
});

app.post('/posts', (req, res) => {
    // urlencoded 미들웨어가 파싱해서 req.body에 추가함
    const { title, name, text } = req.body;
    // post list에 새 개시글 추가
    posts.push({ id: posts.length + 1, title, name, text, createdDate: Date()});
    res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
    // 1. path에서 id정보를 가져옴
    const id = req.params.id;
    // 2. 해당 id 포스트 삭제
    const filteredPosts = posts.filter((post) => post.id !== +id);
    // 3. 삭제 여부 확인  
    const isLengthChanged = posts.length !== filteredPosts.length;
    posts = filteredPosts;
    if (isLengthChanged) {
        res.json("OK!");
        return;
    }
    res.json("NOT CHANGED");
});

app.listen(3000, () => {
    console.log("posts START");
});