const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const ArticleModel = mongoose.model("Article", ArticleSchema);

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.route("/articles")
  .get(getAllArticles)
  .post(postAllArticles)
  .delete(deleteAllArticles)

app.route("/articles/:articleId")
  .get(getArticleById)
  .put(putArticleById)
  .patch(patchArticleById)
  .delete(deleteArticleById)

async function getAllArticles(req, res) {
  try {
    const articles = await ArticleModel.find();
    res.status(200).json(articles);

  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve articles' });
  }
}

async function postAllArticles(req, res) {
  try {
    const newArticle = new ArticleModel({
      title: req.body["title"],
      content: req.body["content"],
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);

  } catch (error) {
    res.status(500).json({ error: "Could not create the article" });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  }

}


async function deleteAllArticles(req, res) {
  const deletedArticle = await ArticleModel.deleteMany();

  if (deletedArticle) {
    res.status(200).json(deletedArticle);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
}


async function getArticleById(req, res) {
  try {
    const article = await ArticleModel.findById(req.params.articleId);

    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the article' });
  }
}

async function putArticleById(req, res) {
  const updatedArticle = await ArticleModel.findByIdAndUpdate(
    req.params.articleId,
    { 
      title: req.body["title"], 
      content: req.body["content"] } ,
    { overwrite: true }
  );

  if (updatedArticle) {
    res.status(200).json(updatedArticle);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
}

async function patchArticleById(req, res) {
  const updatedArticle = await ArticleModel.findByIdAndUpdate(
    req.params.articleId,
    { $set: { 
      title: req.body["title"], 
      content: req.body["content"] } },
    { new: true }
  );

  if (updatedArticle) {
    res.status(200).json(updatedArticle);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
}

async function deleteArticleById(req, res) {
  const deletedArticle = await ArticleModel.findByIdAndRemove(req.params.articleId);

  if (deletedArticle) {
    res.status(200).json(deletedArticle);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
}


app.listen(3001, function () {
  console.log("Server started on port 3001");
})
