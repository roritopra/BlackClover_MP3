let temp1;
let temp2;
let temp3;
let playlist;

const temporade1 = [{
    name: "Black Catcher",
    anime: "Black Clover - Temporade 3",
    location: "Temporada3/BlackCatcher10.mp3"
  },
  {
    name: "Grandeur",
    anime: "Black Clover - Temporade 3",
    location: "Temporada3/Grandeur13.mp3",
  },
  {
    name: "RIGHT NOW",
    anime: "Black Clover - Temporade 3",
    location: "Temporada3/RIGHTNOW9.mp3",
  },
  {
    name: "Everlasting Shine",
    anime: "Black Clover - Temporade 3",
    location: "Temporada3/EverlastingShine12.mp3",
  },
  {
    name: "Stories",
    anime: "Black Clover - Temporade 3",
    location: "Temporada3/Stories11.mp3",
  }
];

const temporade2 = [{
    name: "Black Rover",
    anime: "Black Clover - Temporade 1",
    location: "Temporada1/BlackRover3.mp3",
  },
  {
    name: "GUESS who IS back",
    anime: "Black Clover - Temporade 1",
    location: "Temporada1/GUESSwhoISback4.mp3",
  },
  {
    name: "Haruka Mirai",
    anime: "Black Clover - Temporade 1",
    location: "Temporada1/HarukaMirai1.mp3"
  },
  {
    name: "PAINT it BLACK",
    anime: "Black Clover - Temporade 1",
    location: "Temporada1/PAINTitBLACK2.mp3"
  }
 
];

const temporade3 = [{
    name: "Gamushara",
    anime: "Black Clover - Temporade 2",
    location: "Temporada2/Gamushara5.mp3",
  },
  {
    name: "JUSTadICE",
    anime: "Black Clover - Temporade 2",
    location: "Temporada2/JUSTadICE7.mp3",
  },
  {
    name: "Rakugaki Page",
    anime: "Black Clover - Temporade 2",
    location: "Temporada2/RakugakiPage6.mp3",
  },
  {
    name: "Sky & Blue",
    anime: "Black Clover - Temporade 2",
    location: "Temporada2/sky&blue8.mp3",
  }
  

];



function setup() {
  createCanvas(1280, 720);
  playlist = 0;
  temp3 = new Window({
    textColorSongs: "#fff",
    background: "screens/Pantalla3.png",
    buttonPause: "screens/botonPause.png",
    buttonPlay: "screens/botonPlay.png",
    songs: temporade1,
    colorText: 0
  })

  temp1 = new Window({
    textColorSongs: "#000",
    background: "screens/Pantalla1.png",
    buttonPause: "screens/botonPause.png",
    buttonPlay: "screens/botonPlay.png",
    songs: temporade2,
    colorText: 0
  })

  temp2 = new Window({
    textColorSongs: "#000",
    background: "screens/Pantalla2.png",
    buttonPause: "screens/botonPause.png",
    buttonPlay: "screens/botonPlay.png",
    songs: temporade3,
    colorText: 0
  })

 
}

function draw() {
  background(220);
  switch (playlist) {
    case 0:
      temp3.draw();
      break;
    case 1:
      temp1.draw();
      break;
    case 2:
      temp2.draw();
      break;
   }
}

function mouseClicked() {


  if (dist(mouseX, mouseY, 103, 26) < 100) {
    playlist = 1;
    temp2.stopPlaylist();
        temp3.stopPlaylist();
  }
  if (dist(mouseX, mouseY, 410, 26) < 100) {
    playlist = 2;
        temp1.stopPlaylist();
    temp3.stopPlaylist();
  }
  if (dist(mouseX, mouseY, 705, 26) < 100) {
    playlist = 0;
    temp1.stopPlaylist();
    temp2.stopPlaylist();
      }


  switch (playlist) {
    case 0:
      temp3.mouseClicked();
      break;
    case 1:
      temp1.mouseClicked();
      break;
    case 2:
      temp2.mouseClicked();
      break;
    
  }
}

function mouseDragged() {
  temp2.mouseDragged();
  temp1.mouseDragged();
    temp3.mouseDragged();
}