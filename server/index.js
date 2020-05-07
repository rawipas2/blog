var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// Connrct MongDB 
var mongo_uri = 'mongodb://admin:admin@blogcluster-shard-00-00-zhtbp.gcp.mongodb.net:27017,blogcluster-shard-00-01-zhtbp.gcp.mongodb.net:27017,blogcluster-shard-00-02-zhtbp.gcp.mongodb.net:27017/BLOG-DB?ssl=true&replicaSet=BlogCluster-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, 
    { useNewUrlParser: true}).then
    (
        () => {
            console.log("[seccess] connected to database")
        },
        error => {
            console.log("[failed] " + error)
            process.exit();
        }
)

// Create express 
var app = express()
app.use(cors())

// Format json
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())


// Create Server Port
var port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("[success] listening on port " + port)
})

// Path express (localhost:5000/)
app.get("/", (req,res) => {
    res.status(200).send("Home page api express")
})

// Path MongoDB Collections
var Blog = require('./router/blog_router')
app.use('/api/blog', Blog)

// Error conn't get path
app.use((req, res, next) => {
    var err = new Error("conn't path")
    err.status = 404;
    next(err)
})
