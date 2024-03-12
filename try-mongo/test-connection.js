
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dohee:dohee@cluster0.jnxxgyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// MongoClient 객체를 생성
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
            
async function run() {
try {
    // Connect the client to the server	(optional starting in v4.7)
    // connect() 함수를 사용해 몽고디비에 접속 시도
    await client.connect();
    // Send a ping to confirm a successful connection
    // "admin" db에 접근, ping 명령을 보냄
    // ping: 1 은 특별한 명령이 아니라 서버가 여전히 살아있는지 확인하는 것.
    await client.db("Cluster0").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const adminDB = client.db("Cluster0").admin();
    const listDatabases = await adminDB.listDatabases();
    console.log(listDatabases);
  } finally {
    // Ensures that the client will close when you finish/error
    // 연결 끊기
    await client.close();
  }
}
run().catch(console.dir);
