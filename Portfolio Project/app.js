const animation = document.querySelector("div.animation");
document.addEventListener("animationend", () => {
    animation.style = "transition: all 3s ease; opacity: 0; pointer-events: none;";
  })
