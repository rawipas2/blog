var mongoose = require('mongoose')
var blogSchema = mongoose.Schema({
    // name: { type: String},
    description: { type: String},
    hashtag: { type: String }
},
{
    collection: "BLOGS"
})

var Blog = mongoose.model("blog", blogSchema)
module.exports = Blog