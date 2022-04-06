const express = require("express");
const userRouter = express.Router();
const users = require("./methods");
var passport = require("passport");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

userRouter.get("/", users.getAllUsers);
userRouter.post("/", users.create);
userRouter.put("/:id", users.modify);
userRouter.delete("/:id", users.removeUser);

userRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

userRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/users/protected",
    failureRedirect: "/auth/google/failure",
  })
);

userRouter.get("/protected", isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send("User Authenticated");
});

module.exports = userRouter;
