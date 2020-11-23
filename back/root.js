const express = require("express");
const root = express.Router();
const schema = require("./schema");

root.get("/", async (req, res, next) => {
  try {
    const user = await schema.find();
    console.log(user);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

root.post("/", (req, res, next) => {
  const user = new schema({
    userName: req.body.userName,
    userMail: req.body.userMail,
    passWord: req.body.passWord,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userPhone: req.body.userPhone,
    userPost: req.body.userPost,
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "Utilisateur enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});

root.delete("/:id", (req, res, next) => {
  schema
    .findByIdAndRemove({ _id: req.params.id })
    .exec()
    .then((r) => res.send(r))
    .catch((err) => {
      res.status(500).send("error serveur");
      console.log(err);
    });
});

root.put("/:id", (req, res, next) => {
  schema
    .update(
      { _id: req.params.id },
      {
        $set: {
          userName: req.body.userName,
          userMail: req.body.userMail,
          passWord: req.body.passWord,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          userPhone: req.body.userPhone,
          userPost: req.body.userPost,
        },
      }
    )
    .exec()
    .then((user) => res.send({ user }))
    .catch((err) => {
      res.status(500).send("mouch mrigla");
      console.log(err);
    });
});

module.exports = root;
