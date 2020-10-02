function hasCollided2(bullet2, wall2) {

    bullet2RightEdge = bullet2.x + bullet2.width;
    wall2LeftEdge = wall2.x
  
    if (bullet2RightEdge >= wall2LeftEdge) {
      return true;
    }
      return false;
  }