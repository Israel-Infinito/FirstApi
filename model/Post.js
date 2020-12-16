const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Post', PostSchema);