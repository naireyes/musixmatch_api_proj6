const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  artist: {
    artist_id: Number,
    artist_name: String,
    artist_rating: Number,
    artist_country: String,
  },
});

module.exports = mongoose.model("Artist", artistSchema);
