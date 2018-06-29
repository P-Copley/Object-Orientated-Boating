const { Boat } = require('../boat');
const { expect } = require('chai');

describe('Boat', () => {
  let testBoat;
  beforeEach(() => {
    testBoat = new Boat('Boaty Mc Boatface', 'Cruiser');
  });
  describe('properties', () => {
    it('Instances of Boat have a name property of the passed name', () => {
      expect(testBoat.name).to.equal('Boaty Mc Boatface');
    });
    it('Instances of Boat have a type property of the passed type', () => {
      expect(testBoat.type).to.equal('Cruiser');
    });
    it('Instances of Boat have a bearing property which starts as north', () => {
      expect(testBoat.bearing).to.equal('north');
    });
    it('Instances of Boat have a cargo property which starts as an empty object', () => {
      expect(testBoat.cargo).to.eql({});
    });
  });

  describe('methods', () => {
    describe('turn', () => {
      it('Instances of makeBoat have a turn method', () => {
        expect(testBoat.turn).to.be.a.instanceOf(Function);
      });
      it('turn changes the current bearing of the boat to the passed bearing', () => {
        testBoat.turn('east');
        const actual = testBoat.bearing;
        const expected = 'east';
        expect(actual).to.equal(expected);
      });
    });
    describe('getBearing', () => {
      it('Instances of Boat have a getBearing method', () => {
        expect(testBoat.getBearing).to.be.a.instanceOf(Function);
      });
      it('getBearing returns the current bearing of the boat', () => {
        let actual = testBoat.getBearing();
        let expected = 'north';
        expect(actual).to.equal(expected);
        testBoat.turn('west');
        actual = testBoat.getBearing();
        expected = 'west';
        expect(actual).to.equal(expected);
      });
    });
    describe('loadCargo', () => {
      it('Instances of makeBoat have a loadCargo method', () => {
        expect(testBoat.loadCargo).to.be.a.instanceOf(Function);
      });
      it('loadCargo adds the quantity to the ships cargo under the key of the cargos name', () => {
        const cargo = {
          name: 'bananas',
          quantity: 100
        };
        testBoat.loadCargo(cargo);
        expect(testBoat.cargo).to.haveOwnProperty('bananas');
        expect(testBoat.cargo.bananas).to.equal(100);
      });
      it('if the ship already has cargo of the same name, loadCargo adds to the existing quantity', () => {
        const cargo = {
          name: 'bananas',
          quantity: 100
        };
        testBoat.loadCargo(cargo);
        testBoat.loadCargo(cargo);
        expect(testBoat.cargo).to.haveOwnProperty('bananas');
        expect(testBoat.cargo.bananas).to.equal(200);
      });
    });
    describe('unLoad', () => {
      it('Instances of makeBoat have an unLoad method', () => {
        expect(testBoat.unLoad).to.be.a.instanceOf(Function);
      });
      it('unLoad takes two arguments, a quantity and a name. It removes the quantity from name in the ships cargo', () => {
        const cargo = {
          name: 'bananas',
          quantity: 100
        };
        testBoat.loadCargo(cargo);
        testBoat.unLoad(50, 'bananas');
        expect(testBoat.cargo).to.eql({ bananas: 50 });
      });
      it('unLoad returns a string with how many items were removed', () => {
        const cargo = {
          name: 'bananas',
          quantity: 100
        };
        testBoat.loadCargo(cargo);
        const actual = testBoat.unLoad(50, 'bananas');
        const expected = '50 bananas were unloaded from Boaty Mc Boatface';
        expect(actual).to.equal(expected);
      });
      it('If the boat has less items than are passed to unload, none are removed and the string not enough cargo returned', () => {
        const cargo = {
          name: 'bananas',
          quantity: 50
        };
        testBoat.loadCargo(cargo);
        const actual = testBoat.unLoad(100, 'bananas');
        const expected = 'not enough cargo';
        expect(actual).to.equal(expected);
        expect(testBoat.cargo).to.eql({ bananas: 50 });
      });
    });
  });
});
