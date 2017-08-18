import { users } from './users';

function printEmails() {
  users.forEach(user => console.log(user.email));
}

function printHobbies() {
  users.forEach(user => user.hobbies.forEach(hobby => console.log(hobby)));
}

function findHometownByState(state) {
  return users.find(user => user.hometown.state === state);
}

function allLanguages() {
  const unique = [];
  users.forEach((user) => {
    user.favoriteLanguages.forEach((language) => {
      if (!unique.includes(language)) unique.push(language);
    });
  });
  return unique;
}

function hasFavoriteEditor(editor) {
  return users.some(user => user.favoriteEditor === editor);
}
