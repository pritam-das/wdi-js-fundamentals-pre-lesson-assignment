var powerPelletsEaten = false;
var ghosts = 4;

while (true)
{
    console.log('Ghosts remaining: ' +ghosts);

    if (powerPelletsEaten === false)
    {
        console.log('Pac-Man eats the power pellets');
        powerPelletsEaten = true;
    }

    else if(ghosts > 0)
    {
      console.log('Pac-Man eats a ghost. ');
      ghosts -- ;
    }
    else {
      break;
    }
}

console.log('Pac-Man returns after a long day in the maze');
