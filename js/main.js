document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript carregado com sucesso!");
});

document.addEventListener("DOMContentLoaded", function () {
  function pulseMascot() {
    let mascot = document.getElementById("brown_x5F_mascot");
    let scale = 1;
    let growing = true;

    function animate() {
      if (growing) {
        scale += 0.005;
        if (scale >= 1.1) growing = false;
      } else {
        scale -= 0.005;
        if (scale <= 1) growing = true;
      }
      mascot.style.transform = `scale(${scale})`;
      requestAnimationFrame(animate);
    }
    animate();
  }
  pulseMascot();

  function moveBody() {
    let body = document.querySelector(".st0");
    let position = 0;
    let direction = 1;

    function animate() {
      position += direction * 0.5;
      if (position >= 5 || position <= -5) direction *= -1;
      body.style.transform = `translateY(${position}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }
  moveBody();

  function blinkEye() {
    let eye = document.getElementById("42109");

    setInterval(() => {
      eye.style.opacity = "0.2";
      setTimeout(() => {
        eye.style.opacity = "1";
      }, 500);
    }, 3000);
  }

  blinkEye();
});

document.addEventListener("DOMContentLoaded", function () {
  const svgElement = document.getElementById("pink_x5F_mascot");
  const paths = svgElement.querySelectorAll("path");

  function animatePathDrawing() {
    paths.forEach((path, index) => {
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeDashoffset = path.getTotalLength();
      path.style.transition = "stroke-dashoffset 2s ease";

      setTimeout(() => {
        path.style.strokeDashoffset = 0;
      }, index * 300);
    });
  }

  animatePathDrawing();
});
document.addEventListener("DOMContentLoaded", function () {
  const svgElement = document.getElementById("pink_x5F_mascot");

  function rotateSVG() {
    svgElement.style.transition = "transform 1.5s ease-in-out";
    svgElement.style.transform = "rotate(360deg)";

    setTimeout(() => {
      svgElement.style.transform = "rotate(0deg)";
    }, 1500);
  }

  setInterval(rotateSVG, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  const svgElement = document.getElementById("pink_x5F_mascot");

  function animateShadow() {
    svgElement.style.transition = "box-shadow 0.5s ease-in-out";
    svgElement.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.5)";

    setTimeout(() => {
      svgElement.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    }, 500);
  }

  setInterval(animateShadow, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  const mascot = document.getElementById("red_x5F_mascot");

  function startAnimation(animationName) {
    resetAnimations();
    mascot.classList.add("animated");
    mascot.style.animationName = animationName;
  }

  function resetAnimations() {
    mascot.classList.remove("animated");
    mascot.style.animationName = "";
  }

  document.getElementById("btn-pulse").onclick = () => startAnimation("pulse");
  document.getElementById("btn-swing").onclick = () => startAnimation("swing");
  document.getElementById("btn-jump").onclick = () => startAnimation("jump");
});

document.addEventListener("DOMContentLoaded", function () {
  const svgElement = document.getElementById("Layer_1");

  svgElement.addEventListener("mouseover", function () {
    svgElement.style.transition = "filter 0.3s ease-in-out";
    svgElement.style.filter = "brightness(1.3)";
  });

  svgElement.addEventListener("mouseout", function () {
    svgElement.style.filter = "brightness(1)";
  });
  svgElement.addEventListener("click", function () {
    svgElement.style.transition = "transform 0.5s ease-in-out";
    svgElement.style.transform = "rotate(15deg)";
    setTimeout(() => {
      svgElement.style.transform = "rotate(0deg)";
    }, 500);
  });

  setInterval(() => {
    svgElement.style.transition = "transform 0.5s ease-in-out";
    svgElement.style.transform = "scale(1.1)";
    setTimeout(() => {
      svgElement.style.transform = "scale(1)";
    }, 500);
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const swerveSVG = document.getElementById("SWERVE");

  let scale = 1;
  let growing = true;
  let rotation = 0;
  let colors = ["red", "blue", "green", "purple", "orange"];
  let colorIndex = 0;

  function animate() {
    if (growing) {
      scale += 0.01;
      if (scale >= 1.3) growing = false;
    } else {
      scale -= 0.01;
      if (scale <= 1) growing = true;
    }

    rotation += 2;

    swerveSVG.style.transform = `scale(${scale}) rotate(${rotation}deg)`;

    requestAnimationFrame(animate);
  }

  function changeColor() {
    swerveSVG.style.fill = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }
  animate();
  setInterval(changeColor, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.getElementById("arrow");

  arrow.addEventListener("mouseover", function () {
    let position = 0;
    let direction = 1;

    let shakeInterval = setInterval(() => {
      position += direction * 2;
      if (position >= 6 || position <= -6) direction *= -1;

      arrow.style.transform = `translateX(${position}px)`;
    }, 50);

    setTimeout(() => {
      clearInterval(shakeInterval);
      arrow.style.transform = "translateX(0)";
    }, 500);
  });

  arrow.addEventListener("click", function () {
    let rotation = 0;

    function rotate() {
      rotation += 5;
      arrow.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(rotate);
    }

    rotate();
  });

  let scale = 1;
  let growing = true;

  function pulseAnimation() {
    if (growing) {
      scale += 0.02;
      if (scale >= 1.3) growing = false;
    } else {
      scale -= 0.02;
      if (scale <= 1) growing = true;
    }
    arrow.style.transform = `scale(${scale})`;
    requestAnimationFrame(pulseAnimation);
  }

  pulseAnimation();
});
