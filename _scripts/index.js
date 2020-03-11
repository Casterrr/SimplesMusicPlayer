

function setUnselected(){
    const buttonElements = document.getElementsByClassName('music');
    console.log(buttonElements)
    for (var i = 0; i < buttonElements.length; i++) {
        buttonElements[i].classList.remove("selected")
      }
}
function setSelected(id){
    const buttonEl = document.getElementById(id);
    console.log(buttonEl);
    buttonEl.classList.add("selected");
}

function playAudio(audio){
    audio.play()
}

function setAudio(id){
    audio = document.getElementById('audio')
    if (id === 1){
        audio.src = "_musics/Alan Walker - Alone.mp3"
    };
    if (id === 2){
        audio.src = "_musics/Alan Walker - Darkside (feat. Au Ra and Tomine Harket).mp3"
    };
    if (id === 3){
        audio.src = "_musics/Courtesy Call - 1.25.mp3"
    };
    if (id === 4){
        audio.src = "_musics/Direct & Park Avenue - I Will Go [Monstercat EP Release].mp3"
    };
    if (id === 5){
        audio.src = "_musics/Duumu - Blinded [Monstercat EP Release].mp3"
    };
    if (id === 6){
        audio.src = "_musics/Grant - Color (feat. Juneau).mp3"
    };
    if (id === 7){
        audio.src = "_musics/Kero Kero Bonito - Flamingo.mp3"
    };
    if (id === 8){
        audio.src = "_musics/Last Game - English Cover - Steins;Gate 0 ED.mp3"
    };
    playAudio(audio)
}

function setImg(id){
    const img = document.getElementById('imagem');
    if (id === 1){
        img.src = "_images/Alan Walker - Alone.jpg"
    };
    if (id === 2){
        img.src = "_images/Alan Walker - Darkside.jpg"
    };
    if (id === 3){
        img.src = "_images/Courtesy Call - 1.25.jpg"
    };
    if (id === 4){
        img.src = "_images/Direct & Park Avenue - I'll Go.jpg"
    };
    if (id === 5){
        img.src = "_images/Duumu-Blinded.jpg"
    };
    if (id === 6){
        img.src = "_images/Grand - Color.jpg"
    };
    if (id === 7){
        img.src = "_images/Kero Kero Bonito - Flamingo.jpg"
    };
    if (id === 8){
        img.src = "_images/Last Gamer - English Cover.jpg"
    };
}
function handle(id){
    setUnselected();
    setSelected(id);
    setAudio(id)
    setImg(id)
}
