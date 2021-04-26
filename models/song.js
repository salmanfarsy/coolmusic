const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title:String,
    artist:String,
    rating:Number,
    image:String,
    yt:String,
    review:String,
    comments : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
    author:{
        username:String,
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    }
});

module.exports = mongoose.model('Song', songSchema);