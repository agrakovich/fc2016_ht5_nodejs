const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    images: [Images],
    modified: { type: Date, default: Date.now }
});

const ArticleModel = mongoose.model('Article', Article);

module.exports.ArticleModel = ArticleModel;