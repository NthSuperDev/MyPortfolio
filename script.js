const card = document.getElementById('img');

card.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = card;
    const { offsetX: x, offsetY: y } = e;

    // Räkna ut rotation baserat på musens position (-15 till 15 grader)
    const xRotation = ((y / height) - 0.5) * 30;
    const yRotation = ((x / width) - 0.5) * -30;

    card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});


function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // 1. Räkna ut hela dokumentets höjd dynamiskt
    const scrollHeight = document.documentElement.scrollHeight;
    
    // 2. Slumpmässig startposition i sidled (0 till 100% av bredden)
    leaf.style.left = Math.random() * 100 + 'vw';

    // 3. Sätt hur långt lövet ska falla (hela vägen ner)
    // Vi lägger till lite marginal så det åker förbi botten
    leaf.style.setProperty('--fall-distance', (scrollHeight + 50) + 'px');

    // 4. Slumpmässig storlek och hastighet för mer realism
    const size = Math.random() * 10 + 10 + 'px';
    leaf.style.width = size;
    leaf.style.height = size;
    
    // Hastighet (mellan 5 och 10 sekunder beroende på sidans längd)
    // Tips: Om sidan är jättelång kan du behöva öka siffran 5 här
    const duration = Math.random() * 5 + 7; 
    leaf.style.animationDuration = duration + 's';

    // 5. Lägg till i bodyn
    document.body.appendChild(leaf);

    // 6. Städa upp: Ta bort lövet efter animationen är klar
    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// Starta regnet! (Justera 1000 till 500 om du vill ha fler löv)



card.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = card;
    const { offsetX: x, offsetY: y } = e;

    // Räkna ut rotation baserat på musens position (-15 till 15 grader)
    const xRotation = ((y / height) - 0.5) * 30;
    const yRotation = ((x / width) - 0.5) * -30;

    card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});


function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // 1. Räkna ut hela dokumentets höjd dynamiskt
    const scrollHeight = document.documentElement.scrollHeight;
    
    // 2. Slumpmässig startposition i sidled (0 till 100% av bredden)
    leaf.style.left = Math.random() * 100 + 'vw';

    // 3. Sätt hur långt lövet ska falla (hela vägen ner)
    // Vi lägger till lite marginal så det åker förbi botten
    leaf.style.setProperty('--fall-distance', (scrollHeight + 50) + 'px');

    // 4. Slumpmässig storlek och hastighet för mer realism
    const size = Math.random() * 10 + 10 + 'px';
    leaf.style.width = size;
    leaf.style.height = size;
    
    // Hastighet (mellan 5 och 10 sekunder beroende på sidans längd)
    // Tips: Om sidan är jättelång kan du behöva öka siffran 5 här
    const duration = Math.random() * 5 + 7; 
    leaf.style.animationDuration = duration + 's';

    // 5. Lägg till i bodyn
    document.body.appendChild(leaf);

    // 6. Städa upp: Ta bort lövet efter animationen är klar
    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// Starta regnet! (Justera 1000 till 500 om du vill ha fler löv)
setInterval(createLeaf, 1000);