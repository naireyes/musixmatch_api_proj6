// const fetch = require("node-fetch");
// const fs = require("fs");

// api_url =
//   "https://api.musixmatch.com/ws/1.1/artist.search?q_artist='weezer'&apikey=32c8199fe7c9fd1838eedcc9eac26830";
// api_url_songs =
//   "https://api.musixmatch.com/ws/1.1/track.search?q_artist='weezer'&apikey=32c8199fe7c9fd1838eedcc9eac26830";
// fetch(api_url)
//   .then((res) => res.json())
//   .then((res) => {
//     let dataRes = res.message.body.artist_list;
//     let artists = JSON.stringify(dataRes);
//     fs.writeFile("./artists.json", artists, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("success");
//       }
//     });
//   });

// fetch(api_url_songs)
//   .then((res) => res.json())
//   .then((res) => {
//     let songsRes = res.message.body.track_list;
//     let artists = JSON.stringify(songsRes);
//     fs.writeFile("./songs.json", artists, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("success");
//       }
//     });
//   });

// const Artist = require("../models/Artist");
// const artists = require("./artists.json");
const Songs = require("../models/Songs");
const songs = require("./songs.json");

// Artist.deleteMany({}).then(() => {
//   Artist.create(artists).then((artists) => {
//     console.log(artists);
//     process.exit();
//   });
// });

Songs.deleteMany({}).then(() => {
  Songs.create(songs).then((songs) => {
    console.log(songs);
    process.exit();
  });
});
