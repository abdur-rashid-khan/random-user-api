const express = require('express');
const userControllers = require('../Controllers/user.controller');
const router = express.Router();


router.get("/random", userControllers.getRandomUser)

router.get("/all", userControllers.getAllUser)

router.post("/save", userControllers.saveUser)

router.patch("/update/:id", userControllers.updateUser)
router.patch("/bulk-update", userControllers.updateManyUser)

router.delete("/delete/:id", userControllers.deleteUser)


module.exports = router;