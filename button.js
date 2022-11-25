class Button {
    constructor({x,y,imagePlay, imagePause}){
        this.x=x;
        this.y=y;
        this.imagePause= loadImage(imagePause);
        this.imagePlay= loadImage(imagePlay);
        this.isPlaying= false;
    }
    setIsPlaying(newValue){
        this.isPlaying= newValue;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    draw(){
        imageMode(CENTER);
        if(!this.isPlaying){
            image(this.imagePlay,this.x,this.y);
        } else {
            image(this.imagePause,this.x,this.y);
        }

    }
}