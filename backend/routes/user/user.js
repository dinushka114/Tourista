const { planTrip, getMyTrips, getTripById } = require("../../controllers/plan-trip/plan-trip");
const { userAuth, checkRole } = require("../../middlewares");

const router = require("express").Router();

router.post('/plan-trip', userAuth, checkRole(["User"]), async (req, res) => {
    await planTrip(req, res)
})

router.get('/my-trips', userAuth, async (req, res) => {
    await getMyTrips(req, res);
})

router.get('/get-trip/:id', userAuth, async (req, res) => {
    await getTripById(req, res);
})


module.exports = router;