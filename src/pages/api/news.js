const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nextNews:nextNews@cluster0.es092.mongodb.net/next-news?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const newsCollection = await client.db("news_portal").collection("news");
    console.log("Database connected!");
    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "Success", status: 200, data: news });
    }
    if (req.method === "POST") {
      const news = req.body;
      const result = await newsCollection.insertOne(news);
      res.json(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);
export default run;
