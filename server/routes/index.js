const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.json({
        test: "dsasdada"
    })
});

module.exports = router;