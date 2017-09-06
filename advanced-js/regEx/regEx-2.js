// Metacharacters

// \d (all digits)
const verbosePhoneRegEx = /[0-9]{3}-[0-9]{3}-[0-9]{4}/g;
const betterPhoneRegEx = /\d{3}-\d{3}-\d{4}/g;
let str = 'The phone number is 312-555-1234';
str.match(betterPhoneRegEx); // ['312-555-1234']


// \D (all non-digits)
const nonNumbersRegEx = /\D+/g;
str = 'H3ll0';
str.match(nonNumbersRegEx); // ['H', 'll']


// \n (newline), \r (carriage return), \t (tab characters)
str = 'This is \n a string \n on many \n lines';
str.match(/\n/g); // ['↵', '↵', '↵']


// \s (whitespace)
str = 'Remove all the space from this.';
str.replace(/\s/g, ''); // 'Removeallthespacefromthis.'


// \S (non-whitespace)
str = 'Leave the    whitespace here.';
str.replace(/\S/g, ''); // '      '


// \w (word characters: letters, numbers, spaces; excludes most symbols)
str = 'R3m0ve the word characters__. What\'s left? Maybe [] or {} or () or !@#$%^&*';
str.replace(/\w/g, ''); // "   . ' ?  []  {}  ()  !@#$%^&*"

// \W (non-word characters: symbols, spaces, whitespace)
str = 'Remove the "non-word" characters. We\'ll test! ()!@#$%^&*';
str.replace(/\W/g, ''); // 'RemovethenonwordcharactersWelltest'


// Special characters

// ^ (start of string)
'this is great'.match(/^t.*/); // ['this is great']
'not so great'.match(/^t.*/); // null


// $ (end of string)
'first.test.js'.match(/.*\.test.js$/); // ['first.test.js']
'first.js'.match(/.*\.test.js$/); // null


// ^ inside [] (exclude group)
'eliminate the non-vowels'.replace(/[^aeiou]/gi, ''); // 'eiiaeeooe'


// | (or)
'banana bread'.match(/bread|pancakes$/); // ['bread']
'banana pancakes'.match(/bread|pancakes$/); // ['pancakes'];


// \b (word boundaries)

// /\w+\b/ is commonly used to capture whole words between non-word characters
'https://www.google.com'.match(/\w+\b/g); // ['https', 'www', 'google', 'com']


// Groupings

// Use () to denote a group to access later as $1, $2, etc.
const tweet = 'This is a tweet. #awesome #tweets #funny';
const hashtagsRegEx = /#([\S]+)/ig;
const matches = tweet.match(hashtagsRegEx); // ['#awesome', '#tweets', '#funny']
const hashtags = matches.map(m => m.replace(hashtagsRegEx, 'hashtag: $1')); // ['hashtag: awesome', 'hashtag: tweets', 'hashtag: funny']
