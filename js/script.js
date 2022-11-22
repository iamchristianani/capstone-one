const btnBox = document.querySelector('#menu-display');
const menuOverlay = document.querySelector('#menu-overlay');
const menuButton = document.querySelector('#menu-btn-2');
const hamburgerButton = document.querySelector('#hamburger-button');
const homeButton = document.querySelector('#home-btn');
const aboutButton = document.querySelector('#about-btn');
const programButton = document.querySelector('#program-btn');
const joinButton = document.querySelector('#join-btn');
const sponsorButton = document.querySelector('#sponsor-btn');
const newsButton = document.querySelector('#news-btn');
const allSpeakers = document.querySelector('#all-speakers');

function showMenu() {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
}

menuButton.addEventListener('click', () => {
  showMenu();
});

hamburgerButton.addEventListener('click', () => {
  showMenu();
});

homeButton.addEventListener('click', () => {
  showMenu();
});

aboutButton.addEventListener('click', () => {
  showMenu();
});

programButton.addEventListener('click', () => {
  showMenu();
});

joinButton.addEventListener('click', () => {
  showMenu();
});

sponsorButton.addEventListener('click', () => {
  showMenu();
});

newsButton.addEventListener('click', () => {
  showMenu();
});

const speakers = [
  {
    id: 1,
    name: 'Wizkid',
    title: 'Starboy Entertainment',
    description: "Wizkid is popularly known for his song 'Ojuelegba', which topped charts around the world.",
    image: 'img/wizkid.jpg',
    imageAlt: 'Wizkid',
  },
  {
    id: 2,
    name: 'Davido',
    title: 'Davido Music Worldwide (DMW)',
    description: "OBO as he is popularly called, is known for his chart topping tracks like 'Aye', 'If', and 'Fall'.",
    image: 'img/davido.jpg',
    imageAlt: 'Davido',
  },
  {
    id: 3,
    name: 'Burna Boy',
    title: 'Atlantic Records',
    description: "Grammy Award winning musician, whose album 'Twice as Tall' won the coveted award for the 'Best World Music Album' in 2021.",
    image: 'img/burna-boy.jpg',
    imageAlt: 'Kanye West',
  },
  {
    id: 4,
    name: 'Tiwa Savage',
    title: 'Universal Music Group',
    description: "London bred Nigerian songstress who announced herself to the Nigerian music scene with her jam, 'Kele Kele Love'.",
    image: 'img/tiwa-savage.jpg',
    imageAlt: 'Tiwa Savage',
  },
  {
    id: 5,
    name: 'Kizz Daniel',
    title: 'Fly Boy Inc',
    description: "Kizz Daniel has been on the music scene for a while, and he is showing no signs of tiring, as his new jam 'Buga' tops various charts.",
    image: 'img/kizz-daniel.jpg',
    imageAlt: 'Kizz Daniel',
  },
  {
    id: 6,
    name: 'Tems',
    title: 'RCA Records',
    description: "New sensation, Temilade Openiyi (Tems) has shown the world that she is a force to be reckoned with, as she teams up with Rihanna on the Wakanda movie soundtrack, 'Lift Me Up'.",
    image: 'img/tems.jpg',
    imageAlt: 'Tems',
  },
];

window.addEventListener('load', () => {
  speakers.forEach((items) => {
    const speaker = `<div class="each-speaker">
    <div class="speaker-img">
      <img src="${items.image}" alt="${items.imageAlt}">
    </div>
    <div class="speaker-details">
      <h3>${items.name}</h3>
      <h4>${items.title}</h4>
      <div class="speaker-details-line"></div>
      <p>${items.description}</p>
    </div>
  </div>`;
    allSpeakers.innerHTML += speaker;
  });
});
