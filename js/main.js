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
        let eye = document.getElementById("42109"); // Certifique-se que o ID do olho está correto
    
        setInterval(() => {
            eye.style.opacity = "0.2"; // O olho fica semitransparente, em vez de desaparecer completamente
            setTimeout(() => {
                eye.style.opacity = "1"; // O olho volta ao normal
            }, 500); // Mantém o efeito por meio segundo para ficar mais visível
        }, 3000); // Pisca a cada 3 segundos para ser mais perceptível
    }
    
    blinkEye();
    
});
