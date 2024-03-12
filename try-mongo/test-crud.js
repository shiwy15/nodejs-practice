const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://dohee:dohee@cluster0.jnxxgyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoClient 생성
const client = new MongoClient(url);

async function main() {
    try{
        // 연결 시도
        await client.connect();
        console.log("MongoDB 연결 성공!");

        // 데이터베이스의 person 컬렉션 가져오기
        const collection = client.db("Cluster0").collection("person");

        // 문서 하나 추가
        await collection.insertOne({ name: "deedo", age: "30"});
        console.log("문서 추가 완료!");

        // 문서 찾기
        const document = await collection.find({ name: "deedo" }).toArray();
        console.log("찾은 문서:", document);

        // 문서 갱신
        await collection.updateOne({ name: "deedo" }, { $set: {age: 31} });
        console.log("문서 업데이트 완료!");

        // 갱신된 문서 확인
        const updatedDocument = await collection.find({ name: "deedo" }).toArray();
        console.log("갱신된 문서:", updatedDocument);

        // 문서 삭제하기

        // 연결 끊기
        await client.close();

    } catch(err) {
        console.error(err);
    }
}

main();