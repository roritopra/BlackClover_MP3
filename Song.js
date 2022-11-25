class Song {
    constructor({
        name,
        anime,
        x,
        y,
        location,
        textColor
    }) {
        this.name = name;
        this.anime = anime;
        this.x = x;
        this.y = y;
        this.location = location;
        this.audio = createAudio(location);
        this.textColor = textColor

    }
    getName() {
        return this.name
    }
    getX() {
        return this.x
    }
    getY() {
        return this.y
    }
    getAudio() {
        return this.audio
    }
    draw() {
        textStyle(NORMAL);
        textAlign(LEFT);
        fill(color(this.textColor));
        textSize(14);
        textWrap(WORD);
        textAlign(LEFT);
        text(this.name, this.x, this.y + 35, 120);
     
    }
    playSong() {
        this.audio.play()
    }
    pauseSong() {
        this.audio.pause()
    }
    stopSong() {
        this.audio.stop();
    }

    validateSongChange(selectedSong) {
        if (dist(mouseX, mouseY, this.x, this.y) < 60 && mouseIsPressed) {
            selectedSong = this
        }
    }
    setVolume(newVolume) {
        this.audio.volume(newVolume);
    }

}