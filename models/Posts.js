const mongs = require('mongoose');

const postSchema = mongs.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    }
})

module.exports = mongs.model('Posts',postSchema)