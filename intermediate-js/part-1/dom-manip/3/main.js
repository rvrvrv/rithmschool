document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.getElementsByTagName('li');

  for (let i = 0; i < listItems.length; i++) {
    // Click handler
    listItems[i].addEventListener('click', (e) => {
      document.querySelector('.info').innerText = `
      You just clicked on ${e.target.innerText}!`;
    });
    // Hover handler
    listItems[i].addEventListener('mouseover', (e) => {
      document.querySelector('.hover').innerText = `
      You're hovering over ${event.target.innerText}...`;
    });
    // Mouseout handler
    listItems[i].addEventListener('mouseleave', (e) => {
      document.querySelector('.hover').innerText = '';
    });
  }
});
