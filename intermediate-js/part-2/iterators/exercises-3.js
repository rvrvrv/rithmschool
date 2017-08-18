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

// Array.filter

function getBigHits(songArr) {
  return songArr.filter(song => song.weeksAtNumberOne >= 10);
}

function getShortSongs(songArr) {
  return songArr.filter(song => +song.duration.split(':')[0] < 3);
}

function getSongsByArtist(songArr, artist) {
  return songArr.filter(song => song.artist.toLowerCase() === artist.toLowerCase().trim());
}

// Array.reduce

function summerJamCount2(songArr) {
  return songArr.reduce((acc, next) => {
    if (next.month > 5 && next.month < 9) acc++
    return acc;
  }, 0);
}

function getTotalDurationInSeconds(songArr) {
  return getDurationInSeconds(songArr).reduce((acc, next) => acc + next, 0);
}

function getSongCountByArtist(songArr) {
  return songArr.reduce((acc, next) => {
    if (next.artist in acc) acc[next.artist]++;
    else acc[next.artist] = 1;
    return acc;
  }, {});
}

function averageWeeksAtNumberOne(songArr) {
  // First, get total number of weeks at #1 for all songs
  let totalWeeks = songArr.reduce((acc, next) => acc + next.weeksAtNumberOne, 0);
  // Then, divide totalWeeks by total number of songs for the average
  return (totalWeeks / songArr.length).toFixed(1);
}
