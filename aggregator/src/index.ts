import * as express from 'express';
import * as config from 'config';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import BaseRouter from './BaseRouter';

let db = mongoose.connect('mongodb://localhost/aggregator', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){console.error(err)}
});

const app = express();
const port = config.get('port');
app.use(bodyParser.json());
app.use('/', BaseRouter);

app.listen(port, err=>{
    if(err){
        return console.error(err)
    }
    return console.log(`BaseApp is listening on ${port}`)
})