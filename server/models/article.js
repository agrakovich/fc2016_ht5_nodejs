const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Images = new Schema({
    kind: {
        type: String,
        enum: ['thumbnail', 'detail'],
        required: true
    },
    url: { type: String, required: true }
});

const Article = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    //images: [Images],
    modified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', Article);;