import mongoose, { Schema } from "mongoose";

const suggestionSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,

    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    likedby: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
    },
}, { timestamps: true });


const Suggestion = mongoose.models?.Suggestion || mongoose.model("Suggestion", suggestionSchema);

export default Suggestion;