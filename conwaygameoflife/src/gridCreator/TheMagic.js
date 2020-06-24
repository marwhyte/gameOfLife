export default class TheMagic {
  constructor(currentIteration = 0, boxesAlive = new Map()) {
    this.currentIteration = currentIteration;
    this.newIterationMap = new Map();
    this.boxesDead = new Map();
    this.boxesAlive = boxesAlive;
  }

  currentGen() {
    return this.currentIteration;
  }

  createBox(place) {
    this.boxesAlive.set(place.x + " , " + place.y, {
      x: place.x,
      y: place.y,
    });
  }

  deleteBox(place) {
    this.boxesAlive.delete(place);
  }

  checkIfAlive(place) {
    return this.boxesAlive.has(place);
  }

  boxMaker(place) {
    if (this.checkIfAlive(place.x + " , " + place.y)) {
      this.deleteBox(place.x + " , " + place.y);
    } else {
      this.createBox(place);
    }

    return new TheMagic(this.generation, this.boxesAlive);
  }

  nextGen() {
    this.boxesAlive.forEach((item) => {
      this.NeighborsLiveCount(item);
    });

    this.boxesDead.forEach((item) => {
      this.NeighborsDeadCount(item);
    });

    this.currentIteration++;

    return new TheMagic(this.currentIteration, this.newIterationMap);
  }

  NeighborsLiveCount(place) {
    var counter = 0;

    for (var i = place.x - 1; i <= place.x + 1; i++) {
      for (var j = place.y - 1; j <= place.y + 1; j++) {
        if (i === place.x && j === place.y) continue;

        if (this.checkIfAlive(i + " , " + j)) {
          counter++;
        } else {
          this.boxesDead.set(i + " , " + j, { x: i, y: j });
        }
      }
    }

    if (counter === 2 || counter === 3)
      this.newIterationMap.set(place.x + " , " + place.y, {
        x: place.x,
        y: place.y,
      });
  }

  NeighborsDeadCount(place) {
    var counter = 0;

    for (var i = place.x - 1; i <= place.x + 1; i++) {
      for (var j = place.y - 1; j <= place.y + 1; j++) {
        if (i === place.x && j === place.y) continue;

        if (this.checkIfAlive(i + " , " + j)) {
          counter++;
        }
      }
    }

    if (counter === 3)
      this.newIterationMap.set(place.x + " , " + place.y, {
        x: place.x,
        y: place.y,
      });
  }
}
