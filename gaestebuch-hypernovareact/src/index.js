import express from 'express';
import path from 'path';
import hypernova from "hypernova/server";
import {renderReact} from "hypernova-react";

import View from './View.jsx'

hypernova({
    devMode: true,
    async getComponent(name, context){
        if(name==="View"){
            context.returnMeta= {js: 'Client.js'};
            return renderReact(name, View)
        }
    },
    port : 4444,

    createApplication(){
        const app = express();
        app.use(express.static(path.join(process.cwd(),'dist')));
        return app;
    }
});