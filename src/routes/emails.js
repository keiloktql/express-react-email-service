// import express from "express";
// import { sendOneEmail } from "../controller/emails.js";

const express = require("express");
const { sendOneEmail } = require("../controller/emails.js");

const router = express.Router();

router.post("/one", sendOneEmail);

module.exports = router;
