const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. String: uses destructuring to declare five animal sounds

const[moo,neigh, baa, oink, cluck]=['cow', 'horse', 'sheep', 'pig', 'chicken'];

console.log(moo, neigh, baa, oink, cluck);

// 2. String: uses destructuring to declare the four traditional animal names
const animal = 'cow, horse, sheep,pig,chicken';
const [bessie,dolly,babe,little] = animal.split(',');
console.log(bessie,dolly,babe,little);

const animalString = 'cow, horse, sheep,pig,chicken';
const [,, expectedAnimal] = animalString.split(',');
console.log(expectedAnimal); // 'sheep'

// 3. String: uses destructuring to declare the three traditional animal colors
const animalColorString = 'cow,sheep,pig';
const [blackAndWhite,black,pink] = animalColorString.split(',');
console.log(blackAndWhite, black, pink);

// 4. Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(red, orange, yellow, green, blue, indigo, violet);

// 5. Array: uses destructuring to declare six rainbow color variables using initials
const rainbowColorsString = 'red,orange,yellow,green,blue,indigo,violet'; 
const [r,o,y,g,b,i,v] = rainbowColorsString.split(',')
console.log(r,o,y,g,b,i,v);

// 6. Array: uses destructuring to declare Indigo using indg
const [indg] = ['indigo'];
console.log(indg);

// 7. Object: uses destructuring to assign all appropriate variables using the keys as the variable names
const Muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName,color,song,job,partner);

// 8. Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedmuppet = {
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;
console.log(song2,song4,nestedJob,nestedPartner);