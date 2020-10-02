function hasCollided1(bullet1, ball1) {

    bullet1RightEdge = bullet1.x + bullet1.width;
    wall1LeftEdge = wall1.x;
  
    if (bullet1RightEdge >= wall1LeftEdge) {
      return true;
    }
      return false;
  }