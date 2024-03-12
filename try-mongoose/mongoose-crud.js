const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

// 이 설정을 해줘야 경고 문구가 뜨지 않음
mongoose.set("strictQuery", false);

const app = express();
// http에서 body를 파싱하기 위한 설정
app.use(bodyParser.json());

app.listen(3000, async () => {
    console.log("server started!");
    const mongodbUri = "mongodb+srv://dohee:dohee@cluster0.jnxxgyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    // 몽고디비에 커넥션 연결
    mongoose
        .connect(mongodbUri)
        .then(console.log("Connected to MongoDB"));
});

// 모든 person 데이터 출력
app.get("/person", async (req, res) => {
    const person = await Person.find({});
    res.send(person);
});

// 특정 이메일로 person 찾기
app.get("/person/:email", async (req, res) => {
    const person = new Person.findOne({ email: req.params.email });
    res.send(person);
});

// person 데이터 추가하기
app.post("/person", async (req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.send(person);
});

// person 데이터 수정하기
app.put("/person/:email", async (req, res) => {
    const person = await Person.findOneAndUpdate(
        {email: req.params.email},
        {$set: req.body},
        {new: true}
    );
    console.log(person);
    rew.send(person);
});

// person 데이터 삭제하기
app.delete("/person/:email", async (req, res) => {
    await Person.deleteMany({ email: req.params.email });
    res.send({ success: true });
});