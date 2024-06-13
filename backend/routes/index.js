// routes/index.js
const express = require("express");
const router = express.Router();
const testdbRoutes = require("./testdb");
const aiRoutes = require("./ai");
const userRoutes = require("./user");
const userAIsRoutes = require("./userAIs");
const recommendationRoutes = require("./recommendation")

router.use("/testdb", testdbRoutes);
router.use("/ais", aiRoutes);
router.use("/users", userRoutes);
router.use("/userAIs", userAIsRoutes);
router.use("/recommendations", recommendationRoutes);

router.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

module.exports = router;
