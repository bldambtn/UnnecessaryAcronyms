const router = require("express").Router();
const path = require("path");

router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

module.exports = router;
