// REWIEV JSbasic 5-3
// KARUSEL

// ЗАПРОС НА РЕШЕНИЕ ЧЕРЕЗ ДЕЛЕГИРОВАНИЕ


- откуда взялась запятая в списке ноовоостей в начале 5 семинара?
- этот метод дает запятую и при выводе других элементов!!!

Критерии:
- читаемость кода (конкретные сложности восприятия);
- оценка стиля написания кода в сравнении с реальным проектом;
- const - let;
- оценка употребления тех или иных методов, каунтеров, функций итд




// // ==========================================================
// // 1 strelki // 
// function initCarousel() {
//     let arrowR = document.querySelector('.carousel__arrow_right');
//     let arrowL = document.querySelector('.carousel__arrow_left');
//     let slides = document.querySelectorAll('.carousel__slide');
//     let slidesInner = document.querySelector('.carousel__inner');
//     let slideWidth = slidesInner.offsetWidth;
//     let position = 0;
//     arrowL.style.display = 'none';

//   arrowR.addEventListener('click', () => {
//       if ( position > slides.length-2 ) { position = slides.length-2 };
//       if ( position === slides.length-2 ) {
//         arrowR.style.display = 'none';
//       } else {arrowL.style.display = '' };
//       slidesInner.style.transform = `translateX(${ - ( slideWidth * ++position ) + 'px'})`;
//   });
  
//   arrowL.addEventListener('click', () => {
//       if ( position < 1 ) { position = 1 };
//       if ( position === 1 ) {
//         arrowL.style.display = 'none';
//       } else { arrowR.style.display = '' };
//       slidesInner.style.transform = `translateX(${ - ( slideWidth * --position ) + 'px'})`;
//   });
// };
// // ==========================================================
// // 1 strelki  // 




// // ==========================================================
// // 2 strelki  + функция по кругу  // 
// function initCarousel() {
//   const arrowRight = document.querySelector('.carousel__arrow_right');
//   const arrowLeft = document.querySelector('.carousel__arrow_left');
//   const slides = document.querySelectorAll('.carousel__slide');
//   const carouselInner = document.querySelector('.carousel__inner');
//   const arrowParentNode = document.querySelector('.carousel');
//   const slideCount = slides.length;
//   const slideWidth = slides[0].offsetWidth;

//   let currentSlide = 0;

//   function buttonArrows() {
//     arrowLeft.style.display = currentSlide === 0 ? 'none' : '';
//     arrowRight.style.display = currentSlide === slideCount - 1 ? 'none' : '';
//   }
//   buttonArrows();

//   arrowParentNode.addEventListener('click', ({ target }) => {
//     let arrow1 = target.closest('.carousel__arrow');

//     if (arrow1 === arrowRight) {
//       if (currentSlide < slideCount - 1) {
//         currentSlide++;
//         carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
//         buttonArrows()
//       }
//     }

//     if (arrow1 === arrowLeft) {
//       if (currentSlide > 0) {
//         currentSlide--;
//         carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
//         buttonArrows()
//       }
//     }
//   })
// }
// // ==========================================================
// // 2 strelki  + функция по кругу // 




// // ==========================================================
// // 3 strelki  //    (делегирование?)
// function initCarousel() {
//   const self = document.querySelector('.carousel');
//   const buttonRight = document.querySelector('.carousel__arrow_right');
//   const buttonLeft = document.querySelector('.carousel__arrow_left');
//   const selfSlides = document.querySelector('.carousel__slide');
//   const selfInner = document.querySelector('.carousel__inner');
//   let lengthSlides = selfSlides.length;
//   let count = 0;

//   function click(event) {
//     if (event.target.closest('.carousel__arrow_right')) {count++;}
//     if (event.target.closest('.carousel__arrow_left')) {count--;}
//     shift();
//   }

//   self.addEventListener('click', click);       /* ??? */

//   function shift() {
//     const move = selfInner.offsetWidth * (-count);
//     selfInner.style.transform = `translateX(${move}px)`;
//   }

//   let condition = () => {
//    /*  // buttonRight.style.display = count === (lengthSlides - 1) ? 'none' : ''; */
//     buttonRight.style.display = count <= 3 ? 'none' : '';
//     buttonLeft.style.display = count === 0 ? 'none' : '';
//   };
//   condition();
// }
// // ==========================================================
// // 3 strelki  // 



// // ==========================================================
// // 4 strelki DRUGIE  //    работает????
// function initCarousel() {
//   let switchTool = document.querySelector(".carousel__inner");
//   let arrowright = document.querySelector(".carousel__arrow_right");
//   let arrowleft = document.querySelector(".carousel__arrow_left");
//   let totalWidth = switchTool.offsetWidth;
//   let Offset = 0;
//   let OffsetWidth = -(totalWidth * 3);

//   arrowleft.style.display = "none";

//   arrowright.addEventListener("click", function (event) {
//     Offset -= totalWidth;
//     switchTool.style.transform = `translateX(${Offset}px)`;
//     if (event) {
//       arrowleft.style.display = "";
//     }
//     if (Offset <= OffsetWidth) {
//       arrowright.style.display = "none";
//     }
//     // console.log(Offset);
//   });

//   arrowleft.addEventListener("click", function (event) {
//     Offset += totalWidth;
//     switchTool.style.transform = `translateX(${Offset}px)`;
//     if (event) {
//       arrowright.style.display = "";
//     }
//     if (Offset === 0) {
//       arrowleft.style.display = "none";
//     }
//    /*  console.log(Offset) */ });
// }
// // ==========================================================
// // 4 strelki DRUGIE  // 






// // ==========================================================
// // 5 strelki + func(видимостьь стрелок)  // 
// function initCarousel() {
//   let carouselInner = document.querySelector('.carousel__inner');
//   let carouselArrows = document.querySelectorAll('.carousel__arrow');
//   let arrowRight = document.querySelector('.carousel__arrow_right');
//   let arrowLeft = document.querySelector('.carousel__arrow_left');

//   let currentSlide = 0;
//   let totalSlides = 4; 
//   let slideWidth = carouselInner.offsetWidth; 

//   arrowLeft.style.display = 'none';

//   arrowRight.addEventListener('click', () => {
//     if (currentSlide < totalSlides - 1) {
//       currentSlide++;
//       updateCarousel();
//     }
//   });

//   arrowLeft.addEventListener('click', () => {
//     if (currentSlide > 0) {
//       currentSlide--;
//       updateCarousel();
//     }
//   });

//   function updateCarousel() {
//     carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

//     carouselArrows.forEach(arrow => {
//       if (currentSlide === 0) {
//         arrowLeft.style.display = 'none';
//         arrowRight.style.display = '';
//       } else if (currentSlide === totalSlides - 1) {
//         arrowRight.style.display = 'none';
//         arrowLeft.style.display = '';
//       } else {
//         arrow.style.display = '';
//       }
//     });  
//   }
// }
// // ==========================================================
// // 5 strelki + func(видимость стрелок)  // 





// // ==========================================================
// // 6 ? + func btn strelki  //      (дклкгирование??????)
// function initCarousel() {
//   const arrowRight = document.querySelector('.carousel__arrow_right');
//   const arrowLeft = document.querySelector('.carousel__arrow_left');
//   const slides = document.querySelectorAll('.carousel__slide');
//   const carouselInner = document.querySelector('.carousel__inner');
//   const arrowParentNode = document.querySelector('.carousel');
//   const slideCount = slides.length;
//   const slideWidth = slides[0].offsetWidth;

//   let currentSlide = 0;

//   function buttonArrows() {
//     arrowLeft.style.display = currentSlide === 0 ? 'none' : '';
//     arrowRight.style.display = currentSlide === slideCount - 1 ? 'none' : '';
//   }

//   buttonArrows();

//   arrowParentNode.addEventListener('click', ({ target }) => {
//     let arrow1 = target.closest('.carousel__arrow');

//     if (arrow1 === arrowRight) {
//       if (currentSlide < slideCount - 1) {
//         currentSlide++;
//         carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
//         buttonArrows()
//       }
//     }

//     if (arrow1 === arrowLeft) {
//       if (currentSlide > 0) {
//         currentSlide--;
//         carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
//         buttonArrows()
//       }
//     }
//   })
// }
// // ==========================================================
// // 6 ? + func btn strelki  // 






// // ==========================================================
// // 7 func btn + strelki + обращение к функции (какая схема рабты функции апдэйт?) //  (делегирование?)
// function initCarousel() {
//   const carousel = document.querySelector(".carousel");
//   const carouselInner = carousel.querySelector(".carousel__inner");
//   const carouselSlides = carouselInner.querySelectorAll(".carousel__slide");

//   const carouselArrowRight = carousel.querySelector(".carousel__arrow_right");
//   const carouselArrowLeft = carousel.querySelector(".carousel__arrow_left");

//   const slideWidth = carouselSlides[0].offsetWidth;

//   let slideIndex = 0;

//   function updateCarousel() {
//     const translateX = -slideIndex * slideWidth;
//     carouselInner.style.transform = `translateX(${translateX}px)`;

//     if (slideIndex === 0) {
//       carouselArrowLeft.style.display = "none";
//     } else {
//       carouselArrowLeft.style.display = "";
//     }

//     if (slideIndex === carouselSlides.length - 1) {
//       carouselArrowRight.style.display = "none";
//     } else {
//       carouselArrowRight.style.display = "";
//     }
//   }

//   carousel.addEventListener("click", (event) => {
//     if (event.target.closest(".carousel__arrow_right")) {
//       if (slideIndex < carouselSlides.length - 1) {
//         slideIndex++;
//         updateCarousel();
//       }
//     } else if (event.target.closest(".carousel__arrow_left")) {
//       if (slideIndex > 0) {
//         slideIndex--;
//         updateCarousel();
//       }
//     }
//   });
//   updateCarousel();
// }
// // ==========================================================
// // 7 func btn + strelki + обращение к функции  // 





// // ==========================================================
// // 8 toggle  // 
// function initCarousel() {
//   let carouselInner = document.querySelector('.carousel__inner')
//   let slideWidth = carouselInner.offsetWidth

//   let leftButton = document.querySelector('.carousel__arrow_left')
//   let rightButton = document.querySelector('.carousel__arrow_right')
//   let basicSlide = 0;

//   function toggleButtons() {
//     leftButton.style.display = basicSlide === 0 ? 'none' : ''
//     rightButton.style.display = basicSlide === 3 ? 'none' : ''
//   }
//   toggleButtons()

//   leftButton.addEventListener('click', () => {
//     if (basicSlide > 0) {
//       basicSlide--;
//       let translateX = -basicSlide * slideWidth;
//       carouselInner.style.transform = `translateX(${translateX}px)`
//       toggleButtons();
//     }
//   })

//   rightButton.addEventListener('click', () => {
//     if (basicSlide < 3) {
//       basicSlide++;
//       let translateX = -basicSlide * slideWidth;
//       carouselInner.style.transform = `translateX(${translateX}px)`
//       toggleButtons();
//     }
//   })
// }
// // ==========================================================
// // 8 toggle  // 





// // ==========================================================
// // 9 swith + ?  // (делегирование?)
// function initCarousel() {
//   const carouselContainer = document.querySelector('.carousel');
//   const carousel = document.querySelector('.carousel__inner');
//   const arrowRight = document.querySelector('.carousel__arrow_right');
//   const arrowLeft = document.querySelector('.carousel__arrow_left');
//   const width = carousel.offsetWidth;
//   let currentPosition = 0;
//   arrowLeft.style.display = 'none';

//   carouselContainer.addEventListener('click', function(event) {
//     let target = event.target.closest('.carousel__arrow');

//     if (!target) return;

//     switch (target) {
//       case arrowRight :
//         currentPosition -= width;
//         carousel.style.transform = `translateX(${currentPosition}px)`;
//         break;

//       case arrowLeft :
//         currentPosition += width;
//         carousel.style.transform = `translateX(${currentPosition}px)`;
//         break;
//     }
//     currentPosition == 0 ? arrowLeft.style.display = 'none' : arrowLeft.style.display = '';
//     currentPosition <= (-width * 3) ? arrowRight.style.display = 'none' : arrowRight.style.display = '';
//   })
// }
// // ==========================================================
// // 9 swith + ? // 





// // ==========================================================
// // 10 click + func  //  (длегироование?)
// function initCarousel() {
//   // 0. создаем переменную, в которой храним текущий слайд
//   let numSlides = 0;
//   hideArrow(numSlides);
//   // 1. Запускаем один обработчик для <div class="carousel">
//   let carousel = document.querySelector('.carousel');
//   carousel.addEventListener('click', function(event) {
//     // 2. Проверка на стрелку
//     if (event.target.classList.contains('carousel__arrow_left')) {
//       numSlides -= 1;
//       clickArrow(numSlides);
//     }
//     else if (event.target.classList.contains('carousel__arrow_right')) {
//       numSlides += 1;
//       clickArrow(numSlides);
//     }
//     else {return;}
//   });
// }

// function clickArrow(numSlides) {
//   let carouselInner = document.querySelector('.carousel__inner');
//   let offsetW = carouselInner.offsetWidth;

//   carouselInner.style.transform = `translateX(-${offsetW * numSlides}px)`;
//   hideArrow(numSlides);
// }
// function hideArrow(numSlides) {
//   let arrowLeft = document.querySelector('.carousel__arrow_left');
//   let arrowRight = document.querySelector('.carousel__arrow_right');
//   let slides = document.querySelectorAll('.carousel__slide');

//   arrowLeft.style.display = (numSlides <= 0) ? 'none' : '';
//   arrowRight.style.display = (numSlides >= (slides.length - 1)) ? 'none' : '';
// }
// // ==========================================================
// // 10 click + func  // 





// // ==========================================================
// // 11 не уверен работает ли это решение //  (делегирование?)
// function initCarousel() {

// 	let arowLeft = document.querySelector('.carousel__arrow_left');
// 	let arowRight = document.querySelector('.carousel__arrow_right');
// 	let carouselInner = document.querySelector('.carousel__inner');
// 	let carouselSlide = document.querySelectorAll('.carousel__slide');

// 	let currentSlide = 0;
// 	let carouselWidth = carouselInner.offsetWidth;
// 	let carousel = document.querySelector('.carousel');

// 	arowLeft.style.display = 'none';

// 	carousel.addEventListener('click', (e) => {
// 		if (e.target.classList.contains('carousel__arrow_left')) {
// 			// console.log('клик лево');
// 			currentSlide--;
// 			// console.log(currentSlide * carouselWidth);
// 			carouselInner.style.transform = `translateX(${-currentSlide * carouselWidth}px)`;
// 			if (currentSlide <= 0) {
// 				arowLeft.style.display = 'none';
// 			} else {
// 				arowLeft.style.display = 'block';
// 			}
// 			if (currentSlide < carouselSlide.length - 1) {
// 				arowRight.style.display = 'block';
// 			}
// 		} else if (e.target.classList.contains('carousel__arrow_right')) {
// 			// console.log('клик право');
// 			currentSlide++;
// 			carouselInner.style.transform = `translateX(${-currentSlide * carouselWidth}px)`;
// 			if (currentSlide >= carouselSlide.length - 1) {
// 				arowRight.style.display = 'none';
// 			} else {
// 				arowRight.style.display = 'block';
// 			}
// 			if (currentSlide > 0) {
// 				arowLeft.style.display = 'block';
// 			}
// 		}
// 		// console.log(currentSlide)
// 		// console.log(carouselWidth)
// 	})
// }
// // ==========================================================
// // 11 не уверен работает ли это решение //


