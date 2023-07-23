document.getElementById('nav-btn').addEventListener('click', toggleNav);
document.querySelector('.close-nav').addEventListener('click', closeNav);

const nav = document.querySelector('.circular-nav');

function toggleNav() {
  nav.classList.toggle('open'); // Use toggle instead of add to handle opening and closing
}

function closeNav(event) {
  event.stopPropagation(); // Stop the event from bubbling up to the parent element
  nav.classList.remove('open');
}

window.addEventListener('scroll', reveal);

const reveals = document.querySelectorAll('.reveal');

function reveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 85;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}