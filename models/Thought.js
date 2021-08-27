const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId, 
        default: () => new Types.ObjectId() 
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },

    userCreated: {
        type: Date,
        /// set default value to current timestamp
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
});

//  Thought Schema 
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        trim: true,
        required: 'Thought is Required',
        minlength: 1,
        maxlength: 280
    },

    userCreated: {
        type: Date,
        // set default value to current timestamp
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },

    username: {
        type: String,
        required: 'Username is Required'
    },

    reactions: [ReactionSchema]
},
    {
        toJSON: {
            getters: true  
        },
        id: false
    }
);

//create reactionCount to retrieve length of thought reactions array 

ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;