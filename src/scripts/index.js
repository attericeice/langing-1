
import teacher1 from '../assets/images/teacher1.png';
import teacher2 from '../assets/images/teacher2.png';
import teacher3 from '../assets/images/teacher3.png';
import teacher4 from '../assets/images/teacher4.png';
import teacher5 from '../assets/images/teacher5.png';
import courses1 from '../assets/images/courses1.png';
import courses2 from '../assets/images/courses2.png';
import courses3 from '../assets/images/courses3.png';
import facebook from '../assets/images/Facebook.svg';
import instagram from '../assets/images/Instagram.svg';
import linkdn from '../assets/images/linkdn.svg';
import twitter from '../assets/images/Twitter.svg';
import { Slider } from './utils/slider';
import { createToggle } from './utils/toggleCards';
import '../pages/index.html';
import '../assets/css/style.css';

const userButton = document.querySelector('.user__menu');
const userMenu = document.querySelector('.user__submenu');
const basketLink = document.querySelector('.mobile-basket');
const arrowButtonUserButton = document.querySelector('.icon__button.user__button');
const menuLinksButton = document.querySelector('.menu__button');
const linksMenu = document.querySelector('.header__links');
const teacherSlides = [teacher1, teacher2, teacher3, teacher4, teacher5];
const coursesSlides = [courses1, courses2, courses3];

userButton.addEventListener('click', (e) => {
  if (!userMenu.contains(e.target)) {
      userMenu.classList.toggle('active');
      arrowButtonUserButton.classList.toggle('menu__open');
      userMenu.ariaHidden = false;
      basketLink.ariaHidden = false;
  }
});


window.addEventListener('click', (e) => {
  if (!userButton.contains(e.target)) {
      userMenu.classList.remove('active');
      arrowButtonUserButton.classList.remove('menu__open');
      userMenu.ariaHidden = true;
      basketLink.ariaHidden = true;
  }
});


menuLinksButton.addEventListener('click', () => {
linksMenu.classList.toggle('active');
linksMenu.ariaHidden = !linksMenu.ariaHidden;
});

window.addEventListener('click', (e) => {
  if (!linksMenu.contains(e.target) && !menuLinksButton.contains(e.target)) {
      linksMenu.classList.remove('active');
      linksMenu.ariaHidden = false;
  }
});


const tSlider = new Slider({
  container: '.teachers__slide-list',
  prevButton: '.teachers__buttons-prev',
  nextButton: '.teachers__buttons-next',
  createSlideTemplate: function (container, src, isCurrent, type) {
    let template = isCurrent ?
    `<div class="slide__list-item current">
    <img src="${src}"/>
    <div class="slide__sidebar">
             <ul class="slide__sidebar-list">
               <li class="sidebar__list-item">
                 <a href="#">
                   <img src="${facebook}" />
                 </a>
               </li>
               <li class="sidebar__list-item">
                 <a href="#">
                   <img src="${twitter}" />
                 </a>
               </li>
               <li class="sidebar__list-item">
                 <a href="#">
                   <img src="${instagram}" />
                 </a>
               </li>
               <li class="sidebar__list-item">
                 <a href="#">
                   <img src="${linkdn}" />
                 </a>
               </li>
             </ul>
            </div>
    </div>` 
    : `<div class="slide__list-item"><img src="${src}"/></div>`;
    container.insertAdjacentHTML(type, template);
  },
  slides: teacherSlides,
  sliderLabel: '.teachers__current',
  classNameCurrent: 'current',
  appendElems: ['.slide__sidebar'],
  slideWidth: 381,
  animated: true,
  animationDuration: 200,
  resizeOptions: {
    breakPoints: [
     {from: 775, slidesVisible: 5},
     {from: 0, to: 774, slidesVisible: 1}
    ]
  }
});

tSlider.start();

tSlider.addDynamicRecompile();

const cSlider = new Slider({
  container: '.slider__list',
  prevButton: '.courses__buttons-prev',
  nextButton: '.courses__buttons-next',
  createSlideTemplate: function (container, src, isCurrent, type) {
    const newSlide = isCurrent ? 
    ` <div class="courses__slide-item current">
    <img src="${src}" />
    <div class="slide__play">
      <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.25" cx="57" cy="57.0002" r="57" fill="white"/>
        <path d="M38 57.4367V46.8277C38 33.6141 47.1875 28.2144 58.4375 34.8212L67.5 40.1574L76.5625 45.4937C87.8125 52.1005 87.8125 62.9 76.5625 69.5068L67.5 74.8431L58.4375 80.1793C47.1875 86.7861 38 81.3863 38 68.1728V57.4367Z" fill="#48B84A"/>
        </svg>
    </div>
    <div class="slide__content">
      <h4>Simple Beginner Guide To Yoga</h4>
      <span>
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.7451 37.8348C30.2051 38.2898 28.3851 38.4998 26.2501 38.4998H15.7501C13.6151 38.4998 11.7951 38.2898 10.2551 37.8348C10.6401 33.2848 15.3126 29.6973 21.0001 29.6973C26.6876 29.6973 31.3601 33.2848 31.7451 37.8348Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M26.25 3.5H15.75C7 3.5 3.5 7 3.5 15.75V26.25C3.5 32.865 5.495 36.4875 10.255 37.835C10.64 33.285 15.3125 29.6974 21 29.6974C26.6875 29.6974 31.36 33.285 31.745 37.835C36.505 36.4875 38.5 32.865 38.5 26.25V15.75C38.5 7 35 3.5 26.25 3.5ZM21 24.7975C17.535 24.7975 14.735 21.98 14.735 18.515C14.735 15.05 17.535 12.25 21 12.25C24.465 12.25 27.265 15.05 27.265 18.515C27.265 21.98 24.465 24.7975 21 24.7975Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.2649 18.515C27.2649 21.98 24.4649 24.7975 20.9999 24.7975C17.5349 24.7975 14.7349 21.98 14.7349 18.515C14.7349 15.05 17.5349 12.25 20.9999 12.25C24.4649 12.25 27.2649 15.05 27.2649 18.515Z" fill="#46B249" stroke="#46B249" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        Niketa Roy
      </span>
      <div class="slide__buttons">
        <button class="slide__button btn__green">Buy Now ₹ 1500</button>
        <button class="slide__button btn__grey">
          More
          <svg width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2745 0.13633C32.0576 0.226334 31.8606 0.358244 31.6947 0.524505C31.5285 0.690347 31.3966 0.887359 31.3066 1.10426C31.2166 1.32116 31.1702 1.55368 31.1702 1.78852C31.1702 2.02335 31.2166 2.25587 31.3066 2.47277C31.3966 2.68967 31.5285 2.88669 31.6947 3.05253L39.3602 10.7151H2.51531C2.04181 10.7151 1.5877 10.9032 1.25289 11.238C0.918077 11.5728 0.72998 12.0269 0.72998 12.5004C0.72998 12.9739 0.918077 13.4281 1.25289 13.7629C1.5877 14.0977 2.04181 14.2858 2.51531 14.2858H39.3603L31.6947 21.9484C31.3595 22.2836 31.1712 22.7383 31.1712 23.2124C31.1712 23.6865 31.3595 24.1412 31.6947 24.4764C32.03 24.8117 32.4846 25 32.9587 25C33.4328 25 33.8875 24.8117 34.2228 24.4764L44.9347 13.7645C45.101 13.5986 45.2329 13.4016 45.3229 13.1847C45.4129 12.9678 45.4592 12.7353 45.4592 12.5005C45.4592 12.2656 45.4129 12.0331 45.3229 11.8162C45.2329 11.5993 45.101 11.4023 44.9347 11.2365L34.2228 0.524505C34.0569 0.358244 33.8599 0.226334 33.643 0.13633C33.4261 0.046327 33.1936 0 32.9587 0C32.7239 0 32.4914 0.046327 32.2745 0.13633Z" fill="#48B84A"/>
            </svg>
        </button>
      </div>
    </div>
  </div>`
    : `<div class="courses__slide-item">
    <img src="${src}"/>
    </div>
    `;
    container.insertAdjacentHTML(type, newSlide);
  },
  slides: coursesSlides,
  sliderLabel: '.courses__current',
  classNameCurrent: 'current',
  appendElems: ['.slide__play', '.slide__content'],
  slideWidth: 1081,
  animated: true,
  animationDuration: 300,
  resizeOptions: {
    breakPoints: [
     {from: 1580, slidesVisible: 3},
     {from: 0, to: 1579, slidesVisible: 1}
    ]
  }
});

cSlider.start();

cSlider.addDynamicRecompile();

const cardsContainer = '.workshops__cards';

const elemsCreated = ['.card__item-datelabel', '.card__item-rank'];

createToggle(cardsContainer, elemsCreated, 'current', '.workshops__card-item');















