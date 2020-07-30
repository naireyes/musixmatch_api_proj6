const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/musicSearch", { useNewUrlParser: true });

module.exports = mongoose;
