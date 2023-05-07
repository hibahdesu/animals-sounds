const container = document.querySelector('.container');

const animals = ["cat", "duck", "lion", "puppy"];

animals.forEach(animal => {
    const button = document.createElement('button');

    button.classList.add('but');
    button.innerText = animal;
    button.style.backgroundImage = `url(../img/${animal}.jpg)`
    container.appendChild(button);
    const aud = document.createElement('audio');
    aud.src = `../sound/${animal}.mp3`
    button.appendChild(aud);

    button.addEventListener('click', () => {
        aud.play();
    });
    window.addEventListener('keydown', ()=> {
        if (event.key === animal.slice(0,1)) {
            aud.play();
            button.style.transform = 'scale(.9)'
            setTimeout(() => {
                button.style.transform = 'scale(1)'
            },100)
        }
    })
})