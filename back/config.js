const mongoose = require("mongoose");
const connect = mongoose
  .connect(
    "mongodb+srv://add_user:RP3Y1LGtKWrcSPsa@simplon.ccjlg.mongodb.net/lital?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("mongo db say : Je suis connecté"))
  .catch(() => console.log("mongo db say : Je ne suis pas connecté"));

module.exports = connect;
