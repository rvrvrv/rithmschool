document.addEventListener('DOMContentLoaded', () => {
  // Select, modify, and remove elements
  // document.getElementById('container').innerText = 'Hello!';
  const footer = document.querySelector('.footer');
  footer.classList.add('main');
  setTimeout(() => footer.classList.remove('main'), 1500);
  setTimeout(() => footer.remove(), 3000);

  // Create and append elements
  const li = document.createElement('li');
  li.innerText = 'four';
  const ul = document.querySelector('ul');
  ul.appendChild(li);

  // Loop through elements
  const ol = document.querySelectorAll('ol li');
  for (let i = 0; i < ol.length; i++) {
    ol[i].style.backgroundColor = 'green';
  }
});
