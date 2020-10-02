function hasCollided3() {

    bullet3RightEdge = bullet3.x + bullet1.width;
    wall3LeftEdge = wall3.x;
  
    if (bullet3RightEdge >= bullet3LeftEdge) {
  
      return true;
  
    }
      return false;
  }