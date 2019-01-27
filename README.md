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


# oopPractice 

## Object orientated boating

You are taking your toy boat out for a spin on the local pond.

The local pond is represented by a 5 x 5 grid. Your boat starts in the bottom left, represented by 0, 0.

'- - - - -'  
'- - - - -'  
'- - - - -'  
'- - - - -'  
'X - - - -'  

First thing to do is name your boat!
Write a class Boat that take a name parameter.

```js
const toyBoat = new Boat('boaty mc boatface');
toyBoat.name; // boaty mc boatface
```

Your boat will need to keep track of where it is on the pond. A instance of a boat should have a position property to know where it is on the pond, and a direction to know which way it is facing. Boats start at 0, 0 facing North.

```js
const toyBoat = new Boat('boaty mc boatface');
toyBoat.position; // [0, 0]
toyBoat.direction; // 'N'
```

Your boat will need to be able to change directions. Add a turn method to your boat class that will take a direction (either left or right). This should update the boats direction based upon its current heading.

```js
const toyBoat = new Boat('boaty mc boatface');
toyBoat.turn('right');
toyBoat.direction; // 'E'
toyBoat.turn('right');
toyBoat.direction; // 'S'
```

Add a move method to your boat that will move the boat forward by 1 square in the direction it is currently facing.

```js
const toyBoat = new Boat('boaty mc boatface');
toyBoat.move();
toyBoat.position; // [0, 1]
```

It's a small pond! Make sure that your boats position can't go outside the edge of the pond. If it tries to move outside of the pond keep the boat in it's current position.

```js
const toyBoat = new Boat('boaty mc boatface');
toyBoat.turn('left');
toyBoat.move();
toyBoat.postion; // [0, 0]
```

Looking at the remote control for your boat you discover a new feature! This boat takes a series of instructions that it will carry out in order.
Add a program method to your boat that accepts a list of intructions and will carry them out in order. Instructions can either be : 'forward', 'left' or 'right'.

```js
const toyBoat = new Boat('boaty mc boatface');
toyBoat.program('forward', 'right', 'forward');
toyBoat.postion; // [1, 1]
```

Your friend is on the other side of the pond. You have some sweets and toys that you want to share with them so decide to send them across on your boat. Add a loadItem method to you boat that takes an item to add on the boat. The boat will need a place to keep track of the items it has and how many of each. It will also need a way for your friend to remove the items so add a removeItem method that will remove a certain number of specified items. This implementation is up to you, happy boating!

## Book Store

Suppose you have a bookshop. A book has a title, price and year.

You want to support the following offers:
•All books published after 2000 have 10% discount.
•Buy books worth more than £30 in total, get a 5% discount on the total.

The following books are available

•Moby Dick (1851) £15.20
•The Terrible Privacy of Maxwell Sim (2010) £13.14
•Still Life With Woodpecker (1980) £11.05•Sleeping Murder (1976) £10.24
•Three Men in a Boat (1889) £12.87•The Time Machine (1895) £10.43
•The Caves of Steel (1954) £8.12
•Idle Thoughts of an Idle Fellow (1886) £7.32
•A Christmas Carol (1843) £4.23
•A Tale of Two Cities (1859) £6.32
•Great Expectations (1861) £13.21

Examples:

•Buying The Terrible Privacy of Maxwell Sim, Three Men in a Boat will cost £24.69
•Buying Still Life With Woodpecker, Three Men in a Boat,Great Expectations will cost £35.27
•Buying The Terrible Privacy of Maxwell Sim, Three Men in a Boat,Great Expectations will cost £36.01

Please provide a software application which calculates the final amount to be paid when given a list of books. You can and should use more than one class in your solution. Consider the longevity of the application. How would one, for example, add another discount at a later date ?

You should apply best practice in your solution.

You should be able to provide some guarantee that the finished product works as expected.
