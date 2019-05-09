"use strict";
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};
class Player{
    constructor(x,y) {
      this.x=x;
      this.y=y;
      this.sprite = 'images/char-boy.png';

    }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 100 + Math.floor(Math.random() * 100);
  }
  if (this.x > 505) {
    this.x = 0;
    this.speed = 150 + Math.floor(Math.random() * 100);
  }
  if (player.x < this.x + 60 && player.x + 60 > this.x && player.y < this.y + 60 && player.y + 60 > this.y) {
    player.x = 200;
    player.y = 400;
  }
};
// Player.prototype.update = function(dt) {};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var allEnemies = [];
var enemy = [60, 145, 227];
var player = new Player(200, 404);
for (var i in enemy) {
  var a = new Enemy(0, enemy[i], 150);
  allEnemies.push(a);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Player.prototype.handleInput = function(k) {
  if (k == "left" && this.x > 0) {
    this.x -= 101;
  } else if (k == "right" && this.x < 400) {
    this.x += 101;
  } else if (k == "down" && this.y < 400) {
    this.y += 84;
  } else if (k == "up" && this.y > 0) {
    this.y -= 84;
  }
    if (this.y < 60) {
      setTimeout(function() {
        player.x = 202;
        player.y = 410;
      }, 900);
    }

}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
