/*const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
  speed: 400,
  spaceBetween: 10,
  allowTouchMove: true,
  slidesPerView: 6,
  
});*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  speed: 400,
  allowTouchMove: true,
  // If we need pagination
  /*
  pagination: {
    el: '.swiper-pagination',
  },*/
  
  // Navigation arrows
  width: 90,
  spaceBetween:8,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  /*on:{
      click: function(t){
      
          let current = document.querySelector(".active-slide")
          if(current){
              current.classList.remove("active-slide")
              current.style.width = "86px"
          }

          console.log(t.clickedSlide)
          t.clickedSlide.classList.add("active-slide")
          t.clickedSlide.style.width = 350+"px"
      },
      
  }*/
});


document.querySelectorAll(".swiper-slide").forEach(elt => {
  elt.addEventListener("mouseenter",()=>{
      elt.style.width = 350+"px"
  })
  elt.addEventListener("mouseleave",()=>{
      elt.style.width = 90+"px"
  })
});
