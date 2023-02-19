const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

const commentsByPost = {};

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPost[req.params.id] ?? []);
});

app.post("/posts/:id/comments", (req, res) => {
    const comment = {
        id: randomBytes(4).toString("hex"),
        title: req.body.title,
        post_id: req.params.id
    };
    if (!commentsByPost[comment.post_id]) {
        commentsByPost[comment.post_id] = [];
    }
    commentsByPost[comment.post_id].push(comment);
    res.status(201).send(comment);
});

app.listen(4001, () => {
    console.log("listening in 4001");
});
