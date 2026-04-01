const card = document.getElementById('img');

if (card) {
    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX: x, offsetY: y } = e;

        // Feedback fix: Lugnare rotation (15 istället för 30) och mindre scale (1.02)
        const xRotation = ((y / height) - 0.5) * 8;
        const yRotation = ((x / width) - 0.5) * -8;

        card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(0.01)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
}

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // FIX: Vi använder 'vw' och 'vh' (viewport) istället för dokumentets hela höjd.
    // Detta stoppar löven från att tvinga fram skrollhjul i botten eller på sidan.
    
    // Startposition (95vw för att undvika kanten på högersidan)
    leaf.style.left = Math.random() * 95 + 'vw';

    // Fallhöjd: Vi sätter den till 110vh så de försvinner precis under skärmkanten
    leaf.style.setProperty('--fall-distance', '110vh');

    const size = Math.random() * 10 + 10 + 'px';
    leaf.style.width = size;
    leaf.style.height = size;
    
    const duration = Math.random() * 5 + 7; 
    leaf.style.animationDuration = duration + 's';

    document.body.appendChild(leaf);

    // Städa upp
    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// Starta regnet
setInterval(createLeaf, 1000);