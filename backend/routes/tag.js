const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware } = require("../controllers/auth");
const { create, list, remove, read } = require("../controllers/category");
const { runValidation } = require("../validators");
const { tagValidator } = require("../validators/tag");

router.post(
  "/tag",
  tagValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/tags", list); //get all category
router.get("/tags/:slug", read); //get single category
router.delete("/tags/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
