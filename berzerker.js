class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status = "playing", specialOffensive = false, specialManaMin = 0) {
    super(name, hp, dmg, mana, status, specialOffensive, specialManaMin)
  }

  special = () => {
    console.log(`${this.name} lance Rage (dmg +1)`)
    this.dmg += 1;
    this.hp -= 1;
  }
}