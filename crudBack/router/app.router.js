const express = require("express");
const controller = require("../controller/app.controller");

const router = express.Router();

router.route("/").get(controller.home);
router.route("/save").post(controller.saveUser);
router.route("/update").patch(controller.updateUser);
router.route("/delete/:userID").delete(controller.deleteUser);
router.route("/send").post(controller.sendMailTo);

module.exports = router;
