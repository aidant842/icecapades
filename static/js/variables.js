const spriteWidth = 63.2;
const spriteHeight = 64;
let frameX = 0;
let frameY = 0;
const staggerFrames = 4;
let gameSpeed = 6;
const floorHeight = 45;
let busy = false;
let tuxBeingHurt = false;
let fire = false;
let currentAmmo = 10;
let fishIndex = 0;

const fishColorArray = ["purple", "yellow", "red"];
let fishColor = fishColorArray[fishIndex];