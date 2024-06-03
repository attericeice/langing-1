export class Slider {
     appendDOMElem;
     #sliderDisabled = false;
     slidesVisible;
   constructor(config) {
     this.container = document.querySelector(config.container);
     this.prevButton = document.querySelector(config.prevButton);
     this.nextButton = document.querySelector(config.nextButton);
     this.createSlideTemplate = config.createSlideTemplate;
     this.currentSlide = 0;
     this.slides = config.slides;
     this.sliderLabel = document.querySelector(config.sliderLabel);
     this.classNameCurrent = config.classNameCurrent;
     this.appendElems = config.appendElems;
     this.animated = config.animated;
     this.animationDuration = config.animationDuration;
     this.slideWidth = config.slideWidth;
     this.resizeOptions = config.resizeOptions;
   }
   #initSlider() {
      try{
         this.createSlideTemplate(this.container, this.slides[this.currentSlide], true, 'afterbegin');
         this.#createPrevSlides();
         this.#createNextSlides();
         this.appendDOMElem = document.querySelector(this.appendElems);
         this.nextButton.addEventListener('click', () => this.#getNextSlide());
         this.prevButton.addEventListener('click', () => this.#getPrevSlide());
      }
      catch(e) {
        console.log('ошибка инициализации' + '\n' + e.message);
      }
   }

   #getNextSlide(){
      if (this.#sliderDisabled) return;
      this.#sliderDisabled = true;
      setTimeout(() => this.#sliderDisabled = false, 300);
      const lastSlideIndex = Math.floor(this.slidesVisible / 2);
      const currentDOMIndex = Math.floor(this.slidesVisible / 2);
      this.currentSlide = this.#getNextIndex(this.currentSlide, 1);
      if (this.classNameCurrent) {
         this.container.children.item(currentDOMIndex).classList.remove(this.classNameCurrent);
      }
      if (this.appendElems) {
         //this.container.children.item(currentDOMIndex).removeChild(this.appendDOMElem);
         this.#removeAppendElems(currentDOMIndex);
      }
      const newSlideIndex = this.#getNextIndex(this.currentSlide, lastSlideIndex);
      this.createSlideTemplate(this.container, this.slides[newSlideIndex], false, 'beforeend');
     if (this.animated) {
      const defaultOffset = parseFloat(window.getComputedStyle(this.container, null).getPropertyValue('left'));
      this.#animate({
        duration: this.animationDuration,
        draw: (progress) => {
          let offset = progress === 1 ? defaultOffset : this.slideWidth * progress;
          if (offset < 0) offset = -offset;
          this.container.style.left = `-${offset}px`;
        },
        removeElem: this.container.children.item(0)
       });
     }
     else {
      this.container.children.item(0).remove();
     }
     if (this.classNameCurrent) {
      this.container.children.item(currentDOMIndex + 1).classList.add(this.classNameCurrent);
     }
     if (this.appendElems) {
      //this.container.children.item(currentDOMIndex + 1).appendChild(this.appendDOMElem);
      this.#addAppendElems(currentDOMIndex + 1);
     }
     this.sliderLabel.textContent = this.currentSlide + 1;
   }

   #getPrevSlide() {
      if (this.#sliderDisabled) return;
      this.#sliderDisabled = true;
      setTimeout(() => this.#sliderDisabled = false, 300);
      const currentDOMIndex = Math.floor(this.slidesVisible / 2);
      const lastSlideIndex = Math.floor(this.slidesVisible / 2);
      this.currentSlide = this.#getPrevIndex(this.currentSlide, 1);
      if (this.classNameCurrent) {
         this.container.children.item(currentDOMIndex).classList.remove(this.classNameCurrent);
      }
      if (this.appendElems.length) {
       //this.container.children.item(currentDOMIndex).removeChild(this.appendDOMElem);
       this.#removeAppendElems(currentDOMIndex);
      }
      const newSlideIndex = this.#getPrevIndex(this.currentSlide, lastSlideIndex);
      this.createSlideTemplate(this.container, this.slides[newSlideIndex], false, 'afterbegin');
      if (this.animated) {
         const defaultOffset = parseFloat(window.getComputedStyle(this.container, null).getPropertyValue('left'));
         this.#animate({
           duration: this.animationDuration,
           draw: (progress) => {
             const offset = progress === 1 ? defaultOffset : defaultOffset + this.slideWidth * progress;
             this.container.style.left = `${offset}px`;
           },
           removeElem: this.container.children.item(this.container.children.length - 1),
          });
        }
      else this.container.children.item(this.container.children.length - 1).remove();
      if (this.classNameCurrent) {
      this.container.children.item(currentDOMIndex).classList.add(this.classNameCurrent);
      }
     if (this.appendElems) {
     //this.container.children.item(currentDOMIndex).appendChild(this.appendDOMElem);
     this.#addAppendElems(currentDOMIndex);
     }
     this.sliderLabel.textContent = this.currentSlide + 1;
   }

   #createPrevSlides() {
      let i = 0;
      const prevSlidesCount = Math.floor((this.slidesVisible - 1) / 2);
      let currentIndex = this.currentSlide;
      while (i < prevSlidesCount) {
         currentIndex = this.#getPrevIndex(currentIndex, 1);
         this.createSlideTemplate(this.container, this.slides[currentIndex], false, 'afterbegin');
         i++;
      }
   }

   #createNextSlides() {
      let i = 0;
      const nextSlidesCount = Math.floor((this.slidesVisible - 1) / 2);
      let currentIndex = this.currentSlide;
      while (i < nextSlidesCount) {
         currentIndex = this.#getNextIndex(currentIndex, 1);
         this.createSlideTemplate(this.container, this.slides[currentIndex], false, 'beforeend');
         i++;
      }
   }

   #getNextIndex(currentIndex, increment) {
      if (currentIndex + increment > this.slides.length - 1) {
       return (this.currentSlide + increment) % this.slides.length;
      }
      return currentIndex + increment;
   }

   #getPrevIndex(currentIndex, decrement) {
    if (currentIndex - decrement >= 0) return currentIndex - decrement;
    return this.slides.length - (decrement - currentIndex);
   }

   #animate({duration, draw, removeElem}) {
     const start = performance.now();
     
     requestAnimationFrame(function removeSlide(time){
      let step = (time - start) / duration;
      if (step > 1) step = 1;
      draw(step);
      if (step < 1) {
          requestAnimationFrame(removeSlide);
      }
      else {
          removeElem.remove();
      }
  });
   }

   #removeAppendElems(currentSlide) {
      this.appendDOMElems.forEach(elem => {
         this.container.children.item(currentSlide).removeChild(elem);
       });
   }

   #addAppendElems(currentSlide) {
       this.appendDOMElems.forEach(elem => {
         this.container.children.item(currentSlide).appendChild(elem);
       });
   }

   #queryAppendElems() {
      this.appendDOMElems = this.appendElems.map(elem => document.querySelector(elem));
   }

   addDynamicRecompile() {
     if (this.resizeOptions.breakPoints.length) window.addEventListener('resize', () => this.#initSliderSize());
     else throw new SyntaxError('breakpoints are not defined')
   }

   #initSliderSize() {
      const currentWidth = window.innerWidth;
      for (let breakpoint of this.resizeOptions.breakPoints) {
         const { from, to, slidesVisible } = breakpoint;
          if (currentWidth >= from && (currentWidth <= to || !to) && this.slidesVisible !== slidesVisible) {
            this.slidesVisible = slidesVisible;
            this.container.innerHTML = '';
            this.currentSlide = 0;
            this.#initSlider();
           // this.appendDOMElem = document.querySelector(this.appendElems);
          if (this.appendElems?.length) this.#queryAppendElems();
          }
      }
   }

   start() {
      if (this.resizeOptions.breakPoints.length) this.#initSliderSize();
      else {
         this.#initSlider();
      }
   }
}