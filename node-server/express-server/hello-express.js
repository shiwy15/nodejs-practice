/** 간단한 익스프레스 서버 만들기 */

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8" })
    res.end("헬로, Express~~");
});

app.listen(port, () => {
    console.log(`sTaRt SeRvEr : use ${port}`);
});