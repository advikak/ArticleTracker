import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        author:{
            type: String,
            required: true,
        },
        publishYear:{
            type: Number,
            required: true,
        },
        peerReviewed:{
            type: Boolean,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);

export const Article = mongoose.model('Article', articleSchema);