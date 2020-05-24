import * as mongoose from 'mongoose';

const entry = new mongoose.Schema({
    entry: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    }
});

export default mongoose.model('Entry', entry)