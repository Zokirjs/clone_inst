const mongooose = require('mongoose');
const userSchema = new mongooose.Schema({
    username: {
        type: String,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    posts: [
        {
            type: mongooose.Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
    created: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongooose.model('User', userSchema);