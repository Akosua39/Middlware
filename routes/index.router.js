const { Router } = require("express");
const {
  greet,
  welcome,
  protected,
} = require("../controllers/index.controller");

const { authRequire } = require("../middleware/auth.midddleware");

const indexRouter = Router();

indexRouter.use((req, res, next) => {
  console.log("indexRoute");
  // console.log("specific Route");
  next();
});

indexRouter.get("/", welcome);
indexRouter.get("/greet", greet);
indexRouter.post("/protected", authRequire, protected);

module.exports = indexRouter;
