const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load User model
const Endpoint = require("../../models/Endpoint");

// @route   GET /
// @desc    Get all endpoints
// @access  Public
router.get("/", (req, res) => {
  const errors = {};

  Endpoint.find()
    .then(endpoint => {
      if (!endpoint) {
        errors.noendpoint = "There are no Endpoints in the Database";
        return res.status(404).json(errors);
      }

      res.json(endpoint);
    })
    .catch(err =>
      res
        .status(404)
        .json({ endpoint: "There are no Endpoints in the Database" })
    );
});

module.exports = router;
