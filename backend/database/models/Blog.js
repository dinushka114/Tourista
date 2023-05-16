const { Schema, model } = require("mongoose");

const BlogSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        status:{
            type:String,
            required:true,
            default:"draft"
        }
        
    },
    { timestamps: true }
);

module.exports = model("Blog", BlogSchema);