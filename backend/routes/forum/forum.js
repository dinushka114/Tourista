const { getAllQuizes, askQuiz, getQuizById, answerQuiz, deleteQuiz, updateQuiz } = require("../../controllers/forum/forum");
const { userAuth } = require("../../middlewares");

const router = require("express").Router();

router.get('/all-quizes', async (req, res) => {
    await getAllQuizes(req, res)
})

router.post('/ask', userAuth, async (req, res) => {
    await askQuiz(req, res);
})

router.get('/get-quiz/:id', async (req, res) => {
    await getQuizById(req, res);
})

router.post('/answer/:id', userAuth, async (req, res) => {
    await answerQuiz(req, res);
})

router.delete('/quiz-delete/:id', userAuth, async (req, res) => {
    await deleteQuiz(req, res)
})

router.put('/quiz-update/:id', userAuth, async (req, res) => {
    await updateQuiz(req, res);
})
module.exports = router;