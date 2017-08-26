import request from 'request';

// Using Promises only

function getMovieWithPromises(title) {
  return new Promise((resolve, reject) => {
    request(`https://netflixroulette.net/api/api.php?title=${title}`, (err, res, body) => {
      if (err) reject(err);
      resolve(body);
    });
  });
}

function showDataWithPromises(title) {
  getMovieWithPromises(title)
    .then((data) => {
      console.log('Movie loaded!');
      console.log(data);
    })
    .catch(err => console.log(err));
}

showDataWithPromises('Ghostbusters');


// Using async/await

async function showDataWithAsync(title) {
  const data = await getMovieWithPromises(title);
  console.log(data);
}

showDataWithAsync('Ghostbusters')
  .then((data) => {
    console.log('Movie loaded!');
    console.log(data);
  })
  .catch(err => console.log(err));

Promise.all([showDataWithAsync('The Cable Guy'), showDataWithAsync('Ghostbusters')])
  .then(data => console.log(data));
