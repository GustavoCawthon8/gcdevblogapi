const { Router } = require("express");
const route = Router();

const routerPost = require("./post.routes");

route.use("/post", routerPost);

module.exports = route;