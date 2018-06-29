# Object-Orientated-Boating

Your task is to use Object orientated programming to to model a boat that will load and unload cargo.

## Task 1

Using the pseudo classical style, complete the Boat function so that an instance of Boat has the listed properties.

## Task 2 

Add each of the listed methods to the Boat prototype. 

## Task 3

Refactor your implementation to use ES6 classes instead of the pseudo-classical style.

Create your class in the boatClass.js file and change the require in the tests to check your implementation


A test suite has been provided for you to check your implementation.

## Properties

Boats must have the following properties

* name

```js
testBoat = new Boat('Boaty Mc Boatface'); 
testBoat.name // 'Boaty Mc Boatface'
```

* type

```js
testBoat = new Boat('Boaty Mc Boatface', 'Cruiser');
testBoat.type // 'Cruiser'
```

* bearing

```js
testBoat = new Boat('Boaty Mc Boatface', 'Cruiser');
testBoat.bearing // 'north'
```

* cargo

```js
testBoat = new Boat('Boaty Mc Boatface', 'Cruiser');
testBoat.cargo // {}
```


## Methods

Boats must have the following methods: 

* turn

```js
testBoat = new Boat('Boaty Mc Boatface', 'Cruiser');
testBoat.turn('east') 
testBoat.bearing // 'east'
```

* getBearing

```js
testBoat = new Boat('Boaty Mc Boatface', 'Cruiser');
testBoat.getBearing() // 'north'
testBoat.turn('west') 
testBoat.getBearing() // 'west'
```

* loadCargo

```js
testBoat = new Boat('Boaty Mc Boatface', 'Cruiser');
const cargo = {
  name: 'bananas',
  quantity: 100
};
testBoat.loadCargo(cargo);
testBoat.cargo // { bananas : 100 }
```

* unLoad

```js
testBoat = new Boat('Boaty Mc Boatface', 'Cruiser');
const cargo = {
  name: 'bananas',
  quantity: 100
};
testBoat.loadCargo(cargo);
testBoat.unLoad(50, 'bananas')
testBoat.cargo // { bananas : 50 }
```