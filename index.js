const progressBar = document.querySelector('.progress-bar');
const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');

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

openBtn.addEventListener('click', () => {
    progress = 0;
    progressBar.style.width = '0%';
    modal.classList.remove('hidden');
    animate();
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
