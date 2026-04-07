const progressBar = document.querySelector('.progress-bar');

let progress = 0;
const duration = 3000;
const fps = 144;
const totalFrames = (duration / 1000) * fps;
const increment = 100 / totalFrames;

function animate() {
    progress += increment;
    if (progress > 100) progress = 100;
    progressBar.style.width = progress + '%';
    if (progress < 100) {
        requestAnimationFrame(animate);
    }
}
animate();
