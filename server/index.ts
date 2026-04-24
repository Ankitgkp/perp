import express, { response } from 'express';
// const { tavily } = require('@tavily/core');
import { tavily } from '@tavily/core'
const app = express();
app.use(express.json());

const client = tavily({ apiKey: process.env.TAVILY_API_KEY })

app.post('/chat', async (req, res) => {

    const qurey = req.body.qurey;


    const searchResponse = await client.search(qurey, {
        searchDepth: 'advanced'
    });

    const searchResult = searchResponse.results;



});



app.listen(3000, () => {
    console.log("Listening on port 3000");
})