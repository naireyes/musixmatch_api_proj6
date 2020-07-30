const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const songsSchema = new Schema({
  track: {
    track_id: Number,
    track_name: String,
    track_rating: Number,
    has_lyrics: Number,
    album_name: String,
    artist_name: String,
  },
});

module.exports = mongoose.model("Songs", songsSchema);
