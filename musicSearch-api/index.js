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

app.post("/songs", (req, res) => {
  Songs.create(req.body).then((songs) => {
    res.json(songs);
  });
});

// app.put("/artist/:artist_name", (req, res) => {
//   Artist.findOneAndUpdate(
//     { "artist[artist_name]": req.params.artist_name },
//     req.body,
//     {
//       new: true,
//     }
//   ).then((artist) => {
//     res.json(artist);
//   });
// });

app.put("/artist/:id", (req, res) => {
  console.log(req.body);
  Artist.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((artist) => {
    res.json(artist);
  });
});

app.delete("/artist/:id", (req, res) => {
  Artist.findOneAndRemove({ _id: req.params.id }).then((artist) => {
    res.json(artist);
  });
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => console.log(`PORT: ${app.get("port")}`));

app.listen(3000, () => console.log("listening on port 3000"));
