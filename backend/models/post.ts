const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    todo:{
        type: String,
        required:true,
    },

})

module.exports = mongoose.model('Posts',PostSchema)