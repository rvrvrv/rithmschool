document.addEventListener('DOMContentLoaded', () => {
  // Basic DOM Manipulation
  const firstInnerDiv = document.getElementsByTagName('div')[1];
  const secondInnerDiv = document.getElementsByTagName('div')[2];
  const flicker = setInterval(() => firstInnerDiv.classList.toggle('flicker'), 300);
  setTimeout(() => clearInterval(flicker), 2100);

  setTimeout(() => firstInnerDiv.innerHTML = 'Changed!', 1000);
  setTimeout(() => {
    secondInnerDiv.innerHTML = 'Changed, too!';
    secondInnerDiv.classList.add('neon-glow');
  }, 1500);
  setTimeout(() => secondInnerDiv.classList.remove('neon-glow'), 3500);

  setTimeout(() => {
    firstInnerDiv.style.color = 'rgba(0,0,255,0.6)';
    firstInnerDiv.style.backgroundColor = 'rgba(0,0,0,.3)';
  }, 3500);

  // Traversing the DOM
  const container = document.getElementById('container');
  const footer = document.querySelector('footer');
  console.log('container.childNodes', container.childNodes);
  footer.innerHTML = `'container' has ${container.childNodes.length} child nodes.`;
  console.log('container.children', container.children);
  footer.innerHTML += `<br>There are actually ${container.children.length} children.`;

  const link = document.querySelector('a');
  footer.innerHTML += '<br><br>Check the console for info about \'link\'.';
  console.log('link.parentElement', link.parentElement);
  console.log('link.previousElementSibling', link.previousElementSibling);
  console.log('link.previousSibling', link.previousSibling);
  console.log('link.nextSibling', link.nextSibling);
  console.log('link.nextElementSibling', link.nextElementSibling);

  // Creating, appending, and removing elements
  const newBtn = document.createElement('button');
  newBtn.innerText = 'I\'m new!';
  setTimeout(() => container.appendChild(newBtn), 4000); // Add button
  setTimeout(() => container.removeChild(link), 3000); // Remove link

  // Changing multiple elements
  const divs = document.querySelectorAll('div');
  const colorBtn = document.getElementById('colorBtn');
  setTimeout(() => colorBtn.style.display = 'block', 3000);
  colorBtn.addEventListener('click', randomColors);

  function randomColors() {
    divs.forEach((div) => {
      // Generate random background colors
      div.style.backgroundColor = `
      rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}, 0.2)`;
    });
  }
});

