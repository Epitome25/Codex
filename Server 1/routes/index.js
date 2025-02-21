const authRouter = require("./auth");


const initRouter = (app) => {
  app.use("/api/auth", authRouter);
  
};

module.exports = initRouter;
