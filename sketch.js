var canvas;
var gameState = 0;
var playerCount;
var database;
var form,player,game;
var distance = 0;
var allPlayers;
var car1 , car2 , car3 , car4 , cars;
var track;
var ground;
var car1Img , car2Img , car3Img , car4Img;
function preload(){
    track = loadImage("Sprites/Track.jpg");
    car1Img = loadImage("Sprites/Car1.png");
    car2Img = loadImage("Sprites/Car2.png");
    car3Img = loadImage("Sprites/Car3.png");
    car4Img = loadImage("Sprites/Car4.png");
    ground = loadImage("Sprites/Ground.png");
}
function setup(){
    canvas = createCanvas(displayWidth-30,displayHeight-120);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    if(playerCount == 4){
        game.update(1);
    }
    if(gameState == 1){
        clear();
        game.play();
    }
    if(gameState == 2){
        game.end();
    }
}