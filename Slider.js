class Slider {
    constructor({
        type,
        color,
    }) {
        this.type = type;
        this.color = color;
        this.x = 550;
        if (type === "song") {
            this.y = 450;
        }
        if (type === "volume") {
            this.y = 415 + 70;
        }
        this.height = 7;
        this.width = 240;
        this.bgColor = 'rgba(50, 50,50, 0.5)';
        this.bolaX = 675
        this.bolaY = 415 + (this.height / 2) + 70
        this.volume = 0.5;

    }

    draw(time, duration) {
        rectMode(CORNER);
        noStroke();
        fill(color(this.bgColor));
        rect(this.x, this.y, this.width, this.height)

        if (this.type === "song") {
            const mapTime = map(time, 0, duration, 0, this.width);

            fill(this.color);
            rect(this.x, this.y, mapTime, this.height)
            textStyle(BOLD);
            text(this.formatTime(time), this.x, this.y - 15);
            text(this.formatTime(duration), this.x + this.width, this.y - 15);
        }

        if (this.type === "volume") {
            fill(this.color);
            ellipse(this.bolaX, this.bolaY, 12);
        }
    }
    mouseDragged(song) {

        const bonderies = {
            x1: this.x,
            x2: this.x + this.width,
            y1: this.y - 2,
            y2: this.y + this.height + 2,
        }
        const isInRange = mouseX > bonderies.x1 && mouseX < bonderies.x2 && mouseY > bonderies.y1 && mouseY < bonderies.y2;
        if (isInRange) {

            if (this.type === "volume") {
                this.volume = map(mouseX, bonderies.x1, bonderies.x2, 0, 100) / 100;

                song.volume(this.volume);
                this.bolaX = mouseX;
            } else if (this.type === "song") {

                const head = map(mouseX, bonderies.x1, bonderies.x2, 0, song.duration());

                song.time(head)
            }
        }
    }
    getVolume() {
        return this.volume;
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time / (minutes + 1));
        const secondsBonitos = seconds < 10 ? "0" + seconds.toString() : seconds
        return (minutes + ":" + secondsBonitos);
    }
}