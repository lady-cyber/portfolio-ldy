

document.addEventListener("DOMContentLoaded", () => {
  const interactiveLine = document.querySelector(".interactive-line");
  const title = document.getElementById("title");
  const pinkWall = document.getElementById("pink-wall");
  let scatterCount = 0;

  // Remove transition layers after animation ends
  const transitionLayers = document.querySelector(".transition-layers");
  setTimeout(() => {
    if (transitionLayers) {
      transitionLayers.style.display = "none";
    }
  }, 6000);
    
    
    
    document.addEventListener("scroll", function() {
  const newParagraph = document.querySelector(".new-paragraph");

  const position = newParagraph.getBoundingClientRect();

  if (position.top <= window.innerHeight) {
    newParagraph.classList.add("visible");
  }
});

    
    

  // Animate exit for yellow and black overlay
  function exitTransition() {
    const yellowBg = document.getElementById("yellow-bg");
    const blackOverlay = document.getElementById("black-overlay");

    if (yellowBg) yellowBg.style.animation = "exitYellow 3s ease forwards";
    if (blackOverlay) blackOverlay.style.animation = "exitBlack 3s ease forwards";
  }

  // Scatter letters on click
  if (interactiveLine) {
    interactiveLine.addEventListener("click", () => {
      const letters = title.querySelectorAll("span");

      letters.forEach((letter) => {
        const randomX = Math.random() * window.innerWidth - window.innerWidth / 2;
        const randomY = Math.random() * window.innerHeight - window.innerHeight / 2;
        const randomRotate = Math.random() * 720;

        letter.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
      });

      scatterCount++;
      if (scatterCount === 1) {
        interactiveLine.textContent = "Kindly Scroll Down Now";
        exitTransition();
      }
    });
  }

  // Pink Wall scroll interaction
  if (pinkWall) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      pinkWall.style.top = `${Math.max(0, 100 - scrollY / 10)}%`;
    });
  }
});


