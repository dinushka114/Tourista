const { getAllAccommodations } = require("../../controllers/accommodation/accommodation");
const { planTrip, getMyTrips, getTripById, updateTrip, deleteTrip } = require("../../controllers/plan-trip/plan-trip");
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


router.put('/update-trip/:id', userAuth, async (req, res) => {
    await updateTrip(req, res);
})

router.delete('/delete-trip/:id', userAuth, async (req, res) => {
    await deleteTrip(req, res)
})

router.get('/get-accommodations', async (req, res) => {
    await getAllAccommodations(req, res)
})

module.exports = router;