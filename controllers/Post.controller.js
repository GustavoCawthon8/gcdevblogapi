const Post = require("../models/Post");
const upload = require("../middlewares/upload");
const ErrorApp = require("../utils/ErrorApp");

module.exports = class PostController{
    static async createPost(req, res){
        try{
            const {title, description} = req.body;
            if(!req.file) return res.json({error: "Arquivo não enviado"});

            const image = req.file.buffer;
            
            const post = await Post.create({
                title,
                description,
                image
            });
            res.json(post);

        }catch(e){
            ErrorApp.handle(res, e)
        }
    }

    static async showPost(req, res){
        try{
            const posts = await Post.findAll({raw: true});
            res.json(posts);
            
        }catch(e){
            ErrorApp.handle(res, e)
        }
    }
}