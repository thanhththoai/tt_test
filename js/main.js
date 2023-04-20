var swiper = new Swiper(".bg-slide", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //Navigation bar effect on scroll
  window.addEventListener("scroll", function() {
    const header= document.querySelector(".header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
    
  })

  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const app1 = document.querySelector(".first");
  const app2 = document.querySelector(".second");
  const app3 = document.querySelector(".third");
  const img1 = document.querySelector(".img_one");
  const img2 = document.querySelector(".img_two");
  const img3 = document.querySelector(".img_three");
  one.onclick = function() {
    one.classList.add("active");
    app1.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    img1.classList.add("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
  } 
  two.onclick = function() {
    one.classList.add("active");
    app1.classList.add("active");
    two.classList.add("active");
    app2.classList.add("active");
    three.classList.remove("active");
    img2.classList.add("active");
    img1.classList.remove("active");
    img3.classList.remove("active");
  }
  three.onclick = function() {
    one.classList.add("active");
    app1.classList.add("active");
    two.classList.add("active");
    app2.classList.add("active");
    three.classList.add("active");
    app3.classList.add("active");
    img3.classList.add("active");
    img1.classList.remove("active");
    img2.classList.remove("active");
  }

