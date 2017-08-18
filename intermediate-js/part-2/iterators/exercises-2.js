function vowelCount(str) {
  // Store all vowels in matches array
  const matches = Array.from(str).filter(ltr => ltr.match(/[aeiou]/gi));
  const result = {};
  // Iterate through matches
  matches.forEach((ltr) => {
    // If letter key doesn't exist in result yet, start at 0
    if (!result[ltr]) result[ltr] = 0;
    // Add 1 to corresponding letter key
    result[ltr]++;
  });
  // Return complete object containing vowel count
  return result;
}

function removeVowels(str) {
  // Return all non-vowels based on vowel regEx
  return Array.from(str).filter(ltr => !(ltr.match(/[aeiou]/gi)));
}
