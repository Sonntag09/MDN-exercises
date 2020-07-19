const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6; i++) {
  let imgPath = `images/pic${i}.jpg`
  const newImage = document.createElement('img');
  newImage.setAttribute('src', imgPath);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(){
    displayedImage.setAttribute('src', imgPath);
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  let btnName = btn.getAttribute('class');
  if (btnName === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}