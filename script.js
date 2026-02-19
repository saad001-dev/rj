

 const h1Span = document.querySelector(".name span"); // ✅ use span, not h1
      const text = "RJ SAAD";
      let index = 0;
      let isDeleting = false;
      const typingSpeed = 150;
      const pauseTime = 2000;

      function typeWriter() {
        if (!isDeleting) {
          h1Span.textContent = text.substring(0, index + 1);
          index++;
          if (index === text.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
            return;
          }
        } else {
          h1Span.textContent = text.substring(0, index - 1);
          index--;
          if (index === 0) {
            isDeleting = false;
          }
        }
        setTimeout(typeWriter, isDeleting ? typingSpeed / 2 : typingSpeed);
      }

      setTimeout(typeWriter, 2700);

      // 0.7s delay + 2s animation

      const video = document.getElementById("bg-video");
      video.playbackRate = 0.5;

      const btn = document.querySelector(".btn");

      btn.addEventListener("click", function () {
        const projectSection = document.querySelector("#project");

        projectSection.scrollIntoView({
          behavior: "smooth",
        });

        projectSection.classList.add("projectani");
      });
const items = document.querySelectorAll(
  ".righttime1, .righttime2, .leftime"
);

window.addEventListener("scroll", function () {
  items.forEach(function (item) {
    const position = item.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      item.classList.add("show");
    }
  });
});
let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(){

  if(navLinks.style.display === "flex"){
    navLinks.style.display = "none";
  }
  else{
    navLinks.style.display = "flex";
  }

});
