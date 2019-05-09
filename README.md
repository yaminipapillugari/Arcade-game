# Classic Arcade Game Clone Project

# classic Arcade game

#Aim:The main aim of this project is to design an arcade game.

clone the repository which was provided by the Udacity. some files and folders are provided.
They are:
  1\. style.css
  2\. images folders
  3\. js(app.js,engine.js,resourses.js)
  4\. index.html
  5\. README.md

## How to run the Game?

modified the file app.js

-   created the class for player and x, y parameters are given for position of a player.
-   for enemy class along with x, y parameters speed parameter is also given to manage the speed of enemies.
-   Assigned valued for the coordinates of both player and enemies so that both player and enemies will take their initial positions.
-   In update function of enemy Math.floor and Math.random() is given to move the enemies randomly.
-   allEnemies array is created for the count of enemies.
-   In the update function of enemy a condition is given so that if once all enemies will pass then they should again come from the initial position.

## How to play the Game?

-   At first a player will be set to the initial position.
-   if we press up arrow player will move upside ,if we press right arrow it will move to the right side, if we press the down arrow it will move to the bottom and if press left arrow it will move to the left side. These keys will be handled by the handleInput method.
-   If incase player collides the enemies then the player will comes to it's initial position.
-   In the same way if the player reaches to the water again it will comes to the initial position.
-   so without colliding any enemy player should reach the water.

# Conclusion-
   From this project I learn JavaScript object oriented programming features and also how to create many instances of similar functioning objects.
