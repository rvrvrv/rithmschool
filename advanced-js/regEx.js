// Wildcard character: .

let str = 'The cat in the hat deserves a pat';
let matches = str.match(/.at/g); // ['cat', 'hat', 'pat']

str = 'Shape shop tape grape';
matches = str.match(/..a.e/gi); // ['Shape', ' tape', 'grape']

str = '1-800-555-1234, 888-555-4321, 855-555-5678';
matches = str.match(/5../g); // ['555', '555', '55-', '555', '567']


// Character sets: []

str = 'apes ball sets cups deer pear';
matches = str.match(/[a-d].../g); // ['apes', 'ball', 'cups', 'deer']


// Greedy matching

// Previous character match is optional, but if found, only matches once: ?
let match1 = 'cookies'.match(/cookies?/); // ['cookies']
let match2 = 'cookie'.match(/cookies?/); // ['cookie']
let match3 = 'cookies'.match(/cookiess?/); // ['cookies']
const match4 = 'cookies'.match(/cookiesss?/); // null

// Matches previous character once or more times: +
match1 = 'cookiessssssssss'.match(/cookies+/); // ['cookiessssssssss']
match2 = 'cookies'.match(/cookies+/); // ['cookies']
match3 = 'cookie'.match(/cookies+/); // null

// Previous character match is optional, but if found, no limit to matches: *
match1 = 'cookiessssssssss'.match(/cookies*/); // ['cookiessssssssss']
match2 = 'cookies'.match(/cookies*/); // ['cookies']
match3 = 'cookie'.match(/cookies*/); // ['cookie']

// . and * to match zero or more of anything
// match anything that starts with, ends with, or has the letter e inside of it
'testing'.match(/.*e.*/gi); // ['testing']
'Elephants are everywhere!'.match(/.*e.*/gi); // ['Elephants are everywhere!']
'Can you think of a string containing almost all non-consonants?'.match(/.*e.*/gi); // null


// Character ranges

// Two or more matches of previous character: {2,}
str = 'helo hello hellllo hellllllllllo';
matches = str.match(/hel{2,}o/g); // ['hello', 'hellllo', 'hellllllllllo']

// Exactly 3 matches of previous character: {3}
str = 'Hi! Okay!! Yes!!!';
matches = str.match(/!{3}/g).length; // 1


// Escaping characters: \

// Count the number of periods in a string
str = 'Hello. This is Rich.';
matches = str.match(/\./g).length; // 2
