export class Scores {
  red = new Player();
  blue = new Player();
}

export class Player {
  animals = [0, 0, 0, 0];
  animalBonuses = [0, 0, 0, 0];
  buildings = [0, 0];
  total: number;

  calculate() : number {
    function sum(a: number[]): number {
      var sum = 0;
      for (var idx = 0; idx < a.length; idx++) {
        sum += a[idx];
      }
      return sum;
    }
  
    this.calculateBonus(this, 0);
    this.calculateBonus(this, 1);
    this.calculateBonus(this, 2);
    this.calculateBonus(this, 3);
    this.total = sum(this.animals) + sum(this.buildings) + sum(this.animalBonuses);
    return this.total;
  }

  // To calculate the bonuses per animal are as follows:
  // -3: 0-3 animals
  // 0: 4 to n - 1 animals, where n is the onePointBonus.
  // 1: n to n + 1 animals
  // 2: n+2 to n+3 aimals
  // 3: n+4
  // 4: n+5
  // ....
  private calculateBonus(p: Player, index: number) {
    var onePointCount = [8, 7, 6, 5][index];
    var bonus = 0;
    var count = p.animals[index];
    if (count < 4) {
      bonus = -3;
    } else if (count < onePointCount) {
      bonus = 0;
    } else if (count == onePointCount || count == onePointCount + 1) {
      bonus = 1;
    } else if (count == onePointCount + 2 || count == onePointCount + 3) {
      bonus = 2;
    } else {
      // 12 sheep yields 3 points. 13 sheep yields 4 points.
      // 11 horses yields 5 points.
      bonus = count - (onePointCount + 1);
    }
    p.animalBonuses[index] = bonus;
  }
}

