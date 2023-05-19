const Blog = require("../../database/models/Blog")

const addBlogPost = async (req, res) => {
    try {
        const { title, subtitle, image, content, status } = req.body;

        const newBlogPost = new Blog({
            title,
            subtitle,
            image,
            content,
            status
        })


        await newBlogPost.save();
        return res.status(201).json({
            message: "Post submitted"
        });
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const updateBlogPost = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, subtitle, image, content, status } = req.body;

        await Blog.updateOne({ _id: id }, req.body)
            .then(result => {
                return res.status(201).json({
                    message: "Post updated"
                });
            })

            .catch(err => {
                return res.status(500).json({
                    message: `${err.message}`
                });
            })


    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}


const getAllPosts = async (req, res) => {
    try {

        const posts = await Blog.find({});

        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}


const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Blog.findOne({ _id: id });

        return res.status(200).json(post);
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const deleteBlogPost = async (req, res) => {
    try {
        const id = req.params.id;
        await Blog.deleteOne({ _id: id })
            .then(result => {
                return res.status(201).json({
                    message: "Post deleted"
                });
            })
            .catch(err => {
                return res.status(500).json({
                    message: `${err.message}`
                });
            })

    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

const getPostsForUser = async (req, res) => {
    try {

        const posts = await Blog.find({status:'publish'});

        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json({
            message: `${err.message}`
        });
    }
}

module.exports = { addBlogPost, getAllPosts, getById, updateBlogPost, deleteBlogPost, getPostsForUser }