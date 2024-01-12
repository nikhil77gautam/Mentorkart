const express = require("express");
const router = express.Router();
const { submitContactForm } = require("../Controller/contactController");
router.post("/send-mail", submitContactForm);

module.exports = router;
