const {Router} = require("express");
const PostController = require("../controllers/Post.controller");
const upload = require("../middlewares/upload");
const routePost = Router();

routePost.post("/create", upload.single("imagem") ,PostController.createPost);
routePost.get("/show", PostController.showPost);

module.exports = routePost;