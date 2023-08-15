import mongoose from "mongoose";



const {Schema} = mongoose



let PostSchema = new Schema(
    {
        title:
        {
            type: String,
            required: true,
        },
        desc:
        {
            type: String,
            required: true,
        },
        img:
        {
            type: String,
            required: true,
        },
        content:
        {
            type: String,
            required: true,
        },
        username:
        {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)





export default  PostSchema = mongoose.models.Post || mongoose.model('Post', PostSchema);