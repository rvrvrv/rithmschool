const instructorData = {
  name: 'Elie',
  additionalData: {
    instructor: true,
    favoriteHobbies: ['Playing Cello', 'Tennis', 'Coding'],
    moreDetails: {
      favoriteBasketballTeam: 'New York Knicks',
      numberOfSiblings: 3,
      isYoungest: true,
      hometown: {
        city: 'West Orange',
        state: 'NJ',
      },
      citiesLivedIn: ['Seattle', 'Providence', 'New York'],
    },
  },
};

function displayCities() {
  instructorData.additionalData.moreDetails.citiesLivedIn.forEach(city => console.log(city));
}

function displayHometownData() {
  const hometown = instructorData.additionalData.moreDetails.hometown;
  for (const place in hometown) {
    console.log(hometown[place]);
  }
}

function addDetail(key, val) {
  const moreDetails = instructorData.additionalData.moreDetails;
  moreDetails[key] = val;
  return moreDetails;
}

function removeDetail(key) {
  const moreDetails = instructorData.additionalData.moreDetails;
  delete moreDetails[key];
  return moreDetails;
}
