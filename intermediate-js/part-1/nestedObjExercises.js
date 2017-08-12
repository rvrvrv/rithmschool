// Part 1

const nestedData = {
  innerData: {
    order: ['first', 'second', 'third'],
    snacks: ['chips', 'fruit', 'crackers'],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack(snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};

function allPrime() {
  nestedData.innerData.numberData.primeNumbers.forEach(num => console.log(num));
}

function evenFib() {
  const fib = nestedData.innerData.numberData.fibonnaci;
  for (let i = 0; i < fib.length; i++) {
    if (fib[i] % 2 === 0) console.log(fib[i]);
  }
}

// Part 2

const nestedObject = {
  speakers: [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: 'Bern',
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: 'Hola',
      },
      french: {
        hello: 'Bonjour',
      },
    },
  },
  addSpeaker(speaker) {
    this.speakers.push({ name: speaker });
    return this.speakers;
  },
  addLanguage(language, hello) {
    this.data.languages[language] = { hello };
    return this.data.languages;
  },
  addCountry(country, capital, population) {
    this.data.continents.europe.countries[country.toLowerCase()] = {
      capital, // 'capital': capital
      population, // 'population': population
    };
    return this.data.continents.europe.countries;
  },
};
