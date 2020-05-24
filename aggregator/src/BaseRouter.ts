import * as express from 'express';
import axios from 'axios';
const router = express.Router();
import Entry from "./Entry";

router.post('/api/data', async (req,res)=>{
    let entry = new Entry();
    entry.entry = req.body.entry;
    entry.creationDate = Date.now();
    try{
        return await entry.save().then(function(document,err){
            if(err){
                return res.status(400).send({
                    message: 'Error on Creation'
                });
            }
            return res.send(document);
        })
    } catch(e){
        return res.status(400).send({
            message: e
        });
    }
});

router.get('/', async function(req,res){
    let dbdata = {
        data: undefined
    };
    dbdata.data = await Entry.find({},function(err,entries){
        if(err){
            console.error(err);
            return ""
        }
        if (entries){
            return entries
        }
    });
    let hypernova = await axios.post("http://localhost:4444/batch",{
        content: {
            name: "View",
            data: dbdata
        }
    });
    res.send(`
        <html>
            <head>
                <script src="http://localhost:4444/${hypernova.data.results.content.meta.js}"></script>
            </head>
            <body>
                ${hypernova.data.results.content.html}        
            </body>
        </html>
    `)
});

export default router;