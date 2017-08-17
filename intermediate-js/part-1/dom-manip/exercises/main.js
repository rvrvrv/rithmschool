document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('change_heading').innerText = 'Hello World!';
  // Create new purple div
  const newDiv = document.createElement('div');
  newDiv.classList.add('purple');
  document.querySelector('section').appendChild(newDiv);

  // Color selection and display
  const boxes = document.querySelectorAll('section div');
  const selected = document.querySelector('.selected');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', (e) => {
      selected.innerText = e.target.className;
      selected.style.color = e.target.className;
    });
    boxes[i].addEventListener('mouseleave', (e) => {
      selected.innerText = 'None!';
      selected.style.color = 'black';
    });
  }

  // Racing game
  const startBtn = document.querySelector('button');
  const car1 = document.querySelector('.car1');
  const car2 = document.querySelector('.car2');
  let racingLoop;

  function beginRace() {
    startBtn.disabled = true;
    startBtn.innerText = 'Racing...';
    const maxDistance = window.innerWidth - car1.offsetWidth;
    console.log('maxDistance: ', maxDistance);
    // At start of race, declare opening positions
    car1.style.marginLeft = '0px';
    car2.style.marginLeft = '0px';
    let car1pos = 0;
    let car2pos = 0;
    // Racing loop
    racingLoop = setInterval(() => {
      // Check for wins
      if (car1pos >= maxDistance || car2pos >= maxDistance) {
        clearInterval(racingLoop);
        setTimeout(() => {
          if (car1pos >= maxDistance) alert(`Car 1 wins the race!`);
          else alert(`Car 2 wins the race!`);
          window.location.reload();
        }, 500);
      }
      // Race!
      car1pos = parseInt(car1.style.marginLeft, 10);
      car2pos = parseInt(car2.style.marginLeft, 10);
      car1pos += Math.floor(Math.random() * 60);
      car2pos += Math.floor(Math.random() * 60);
      car1.style.marginLeft = `${car1pos}px`;
      car2.style.marginLeft = `${car2pos}px`;
    }, 60);
  }

  startBtn.addEventListener('click', beginRace);
});
