const { userAuth, checkRole } = require("../../middlewares");
const { addAccommodation, getAllAccommodations, updateAccommodation, deleteAccommodation } = require("../../controllers/accommodation/accommodation");

const router = require("express").Router();

router.post('/add-accommodation', userAuth, checkRole(["Admin"]), async (req, res) => {
    await addAccommodation(req, res)
})


router.get("/get-accommodations", userAuth, checkRole(["Admin"]), async (req, res) => {
    await getAllAccommodations(req, res);
})

router.put("/update-accommodation/:id", userAuth, checkRole(["Admin"]), async (req, res) => {
    await updateAccommodation(req, res);
})

router.delete("/delete-accommodation/:id", userAuth, checkRole(["Admin"]), async (req, res) => {
    await deleteAccommodation(req, res);
})

module.exports = router;