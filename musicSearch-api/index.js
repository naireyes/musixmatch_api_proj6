const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const Artist = require("./models/Artist");
const artists = require("./db/artists.json");
const Songs = require("./models/Songs");
const songs = require("./db/songs.json");

app.get("/artist", (req, resp) => {
  Artist.find({}).then((artists) => {
    resp.json(artists);
  });
});

app.get("/songs", (req, resp) => {
  Songs.find({}).then((songs) => {
    resp.json(songs);
  });
});

app.listen(3000, () => console.log("listening on port 3000"));
