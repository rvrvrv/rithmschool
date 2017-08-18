import { songs } from './songs';

// Array.forEach
function listNames() {
  console.log(songs);
  songs.forEach(song => console.log(song.name));
}

function listSongDetails() {
  songs.forEach((song) => {
    const output = `${song.name}, by ${song.artist} (${song.duration})`;
    console.log(output);
  });
}

function summerJamCount() {
  let total = 0;
  songs.forEach((song) => {
    if (song.month > 5 && song.month < 9) total++;
  });
  console.log(total);
}

// Array.map
function getDurations() {
  return songs.map(song => song.duration);
}

function getDurationInSeconds() {
  return songs.map((song) => {
    const mins = +song.duration.split(':')[0]; // Get mins
    // Convert mins to secs and add to remaining secs
    return (mins * 60) + (+song.duration.slice(-2));
  });
}

function getMainArtists() {
  return songs.map((song) => {
    if (song.artist.includes('featuring')) return song.artist.slice(0, song.artist.indexOf('featuring') - 1);
    return song.artist;
  });
}
