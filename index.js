const path = require("path");
const MP3Tag = require("mp3tag.js");
const fs = require("fs");

const songName = "00 Hangar 18.mp3";
const pathRoot = path.resolve("../", "/../", "../");
const pathMusic = path.join("Users", "mushf", "OneDrive", "Music", songName);

const songBuffer = fs.readFileSync(pathRoot + pathMusic);

const mp3tag = new MP3Tag(songBuffer);
mp3tag.read();
let coverArt = mp3tag.frames.filter(frame => frame.id == 'APIC');
console.log(coverArt);

// UFID Unique file identifier
// TIT2 Title/songname/content description
// TPE2 Band/orchestra/accompaniment
// TALB Album/Movie/Show title
// TRCK Track number/Position in set
// TYER Year
// APIC Cover Art

// TCOM Composer
// TPE1 Lead performer(s)/Soloist(s)
// TCON Content type
// TSOP Performer sort order
// TXXX User defined text information frame
// PRIV Private frame
// COMM Comments
// TPUB Publisher

// edit function to work with above
function readMultipleFiles() {
  let json = [];
  let fileData;
  fs.readdirSync(readPath).forEach(fileName => {
    fileData = JSON.parse(fs.readFileSync(writePath + fileName));
    console.log(`found ${fileData.data.children.length} listings in ${fileName}...`);
    json.push(fileData.data.children);
  });
  fs.writeFileSync(`${writePath}combined_all${(new Date()).getTime()}.txt`, JSON.stringify(json));
  console.log(json.length);
}