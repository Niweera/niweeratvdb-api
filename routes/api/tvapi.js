const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');
global.Headers = fetch.Headers;

// @route   GET /tvapi/tvmaze
// @desc    Get all tvmaze details
// @access  Public
router.get("/tvmaze", (req, res) => {
    fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => res.status(404).json(error))
});

// @route   GET /tvapi/trakt/:slug
// @desc    Get tv show details by given slug
// @access  Public
router.get("/trakt/:slug", (req, res) => {
    fetch(`https://api.trakt.tv/search/show?query=${req.params.slug}&extended=full`, {
        headers: new Headers({
            'Content-type': 'application/json', 'trakt-api-key': '29cbb9c39cf1432aa947789f57e995b029e09dcc1982d4f83f51306d1f9010d4', 'trakt-api-version': 2
        })
    })
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => res.status(404).json(error))
});

// @route   GET /*
// @desc    Return 404 for all unidentified routes
// @access  Public
const fourNaughtFour = {
    message: "Not Found",
    all_endpoints_url: "https://api.niweera.gq"
};
router.get("*", function (req, res) {
    res.status(404).json(fourNaughtFour);
});

module.exports = router;
