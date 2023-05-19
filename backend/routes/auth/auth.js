const userLogin = require("../../controllers/auth/login");
const { userSignUp } = require("../../controllers/auth/register");
const multer = require("multer");
const { userAuth, checkRole } = require("../../middlewares");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('avatar');
const router = require("express").Router();

router.post('/login-admin', async (req, res) => {
    await userLogin(req.body, "Admin", res)
})

router.post('/register-user', upload, async (req, res) => {
    await userSignUp(req , "User", res)
})

router.post('/register-admin', async (req, res) => {
    await userSignUp(req, "Admin", res)
})

router.post('/login-user', async (req, res) => {
    await userLogin(req.body, "User", res);
})





module.exports = router;