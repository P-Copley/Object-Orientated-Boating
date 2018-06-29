class Boat {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.bearing = 'north';
    this.cargo = {};
  }
  getBearing() {
    return this.bearing;
  }
  turn(bearing) {
    this.bearing = bearing;
  }
  loadCargo(item) {
    if (this.cargo[item.name]) this.cargo[item.name] += item.quantity;
    else this.cargo[item.name] = item.quantity;
  }
  unLoad(quantity, name) {
    if (this.cargo[name] < quantity) return 'not enough cargo';
    this.cargo[name] -= quantity;
    return `${quantity} ${name} were unloaded from ${this.name}`;
  }
}

module.exports = { Boat };
