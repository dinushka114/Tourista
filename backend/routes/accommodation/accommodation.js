const { userAuth, checkRole } = require("../../middlewares");
const { addAccommodation, getAllAccommodations } = require("../../controllers/accommodation/accommodation");

const router = require("express").Router();

router.post('/add-accommodation', userAuth, checkRole(["Admin"]), async (req, res) => {
    await addAccommodation(req, res)
})


router.get("/get-accommodations", userAuth, checkRole(["Admin"]), async (req, res) => {
    await getAllAccommodations(req, res);
})



module.exports = router;