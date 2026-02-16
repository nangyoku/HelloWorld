// Licznik kliknięć
let clickCount = 0;

const heading = document.querySelector('h1');
const counterDisplay = document.querySelector('.counter');

// Klikanie na główny tekst
heading.addEventListener('click', function() {
    clickCount++;
    counterDisplay.textContent = `Kliknęłeś ${clickCount} razy! 🎉`;
    
    heading.classList.remove('clicked');
    void heading.offsetWidth; // Trigger reflow
    heading.classList.add('clicked');
    
    createParticle();
});

// Tworzenie efektu cząstek
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = '✨';
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 2000);
}

// Przycisk zmiany koloru
document.getElementById('colorBtn').addEventListener('click', function() {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
});

// Przycisk resetowania
document.getElementById('resetBtn').addEventListener('click', function() {
    clickCount = 0;
    counterDisplay.textContent = 'Liczba kliknięć: 0';
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    document.body.classList.remove('dark-mode', 'light-mode');
});

// Ciemny motyw
document.getElementById('darkBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.remove('light-mode');
});

// Jasny motyw
document.getElementById('lightBtn').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.remove('dark-mode');
});

// Easter egg - konami code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            triggerEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function triggerEasterEgg() {
    heading.textContent = '🚀 SUPER HELLO WORLD! 🚀';
    heading.style.animation = 'spin 1s ease-in-out infinite, glow 1s ease-in-out infinite';
    
    for (let i = 0; i < 30; i++) {
        createParticle();
    }
    
    setTimeout(() => {
        heading.textContent = 'Hello World!';
        heading.style.animation = 'float 3s ease-in-out infinite, bounce 2s ease-in-out infinite';
    }, 3000);
}

// Animacja na załadowaniu
window.addEventListener('load', function() {
    heading.classList.add('glow');
});
