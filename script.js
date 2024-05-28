document.getElementById('revealButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
});

document.getElementById('musicToggle').addEventListener('click', function() {
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
        this.textContent = 'Parar Música';
    } else {
        music.pause();
        this.textContent = 'Tocar Música';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const buttonMusic = document.getElementById('musicToggle');
    buttonMusic.dispatchEvent(new Event('click'));
})