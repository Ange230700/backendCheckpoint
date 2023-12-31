const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const boatControllers = require("./controllers/boatControllers");

router.get("/boats", boatControllers.browse);
router.put("/boats/:id", boatControllers.edit);

const tileControllers = require("./controllers/tileControllers");

router.get("/tiles", tileControllers.browse);

const gameControllers = require("./controllers/gameControllers");

router.post("/games", gameControllers.add);

/* ************************************************************************* */

module.exports = router;
