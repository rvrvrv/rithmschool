// Always complete first task before second
function inOrder(first, second) {
  return new Promise((resolve, reject) => {
    try {
      resolve(first);
    } catch (err) {
      console.log('An error occurred during the first task.');
      reject(first);
    }
  })
    .then(second);
}

const logOne = setTimeout(() => console.log('one!'), Math.random() * 1000);
const logTwo = setTimeout(() => console.log('two!'), Math.random() * 1000);

inOrder(logOne, logTwo);


// Retrieve and display a list of all episodes in one season of a TV show

function getEpisodes(seasonId) {
  return fetch(`https://api.tvmaze.com/seasons/${seasonId}/episodes`)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error(`Could not retrieve episode data for ID ${seasonId}`);
    }).then(data => episodes = data.reduce((acc, next) => {
      const title = `<h3>Episode ${next.number}: ${next.name}</h3>`;
      return acc + title + next.summary;
    }, '')).catch(err => console.log(err.message));
}

const psychSeason1 = getEpisodes(2016).then(data => console.log(data));


// Implement a simple version of Promise.all

const season1 = getEpisodes(2016);
const season2 = getEpisodes(2017);
const season3 = getEpisodes(2018);

const seasons = Promise.all([season1, season2, season3])
  .then(data => console.log(data));
