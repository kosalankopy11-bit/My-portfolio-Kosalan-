const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// செக் செய்து பழைய மோடை அப்ளை செய்தல்
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    // மோடை சேமித்தல் (Refresh செய்தாலும் மாறாது)
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// Typing effect
const heroTyping = document.getElementById('hero-typing');
const professions = ["Full Stack Developer", "UI/UX Designer", "Freelancer"];
let profIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < professions[profIndex].length) {
        heroTyping.textContent += professions[profIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        heroTyping.textContent = professions[profIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        profIndex = (profIndex + 1) % professions.length;
        setTimeout(typeEffect, 500);
    }
}

window.onload = typeEffect;
