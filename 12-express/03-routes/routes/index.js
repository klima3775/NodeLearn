const express = require("express");
const commentsRouter = require("../controllers/comments");
const usersRouter = require("../controllers/users");
const rootRouter = require("./root");

const router = express.Router();

router.use("/comments", commentsRouter);
router.use("/users", usersRouter);
router.use("/", rootRouter);

module.exports = router;
