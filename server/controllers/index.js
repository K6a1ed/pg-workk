const express = require("express");
const getUsers = require("./getData");
const addUsers = require("./postData");

const router = express.Router();

router.get("/users", getUsers);
router.post("/create-user", addUsers);

module.exports = router;
