
const { addBlogPost, getAllPosts, getById, updateBlogPost, deleteBlogPost, getPostsForUser } = require("../../controllers/blog/blog");
const { userAuth, checkRole } = require("../../middlewares");

const router = require("express").Router();


router.post('/add-post', userAuth, checkRole(["Admin"]), async (req, res) => {
    await addBlogPost(req, res);
})


router.get('/get-posts', userAuth, checkRole(["Admin"]), async (req, res) => {
    await getAllPosts(req, res);
})


router.get('/get-post/:id', userAuth, checkRole(["Admin"]), async (req, res) => {
    await getById(req, res);
})

router.put("/update-post/:id", userAuth, checkRole(["Admin"]), async (req, res) => {
    await updateBlogPost(req, res);
})

router.delete("/delete-post/:id", userAuth, checkRole(["Admin"]), async (req, res) => {
    await deleteBlogPost(req, res);
})

router.get("/get-posts-user", async (req, res) => {
    await getPostsForUser(req, res);
})

module.exports = router;