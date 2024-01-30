const dogs = [
    {weight: 22 , curFood: 250, owners:['Alice']},
    {weight: 8 , curFood: 200, owners:['Matilda']},
    {weight: 13 , curFood: 275, owners:['Sarah']},
    {weight: 32 , curFood: 340, owners:['Michael']}, 
];
// 1 Recomment food
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);
// 2 Find dog for Sarah and her eat too much  or little
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
    `Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`
);
// 3 Find thi ownerEat Too Much adnd too Little
const ownersEatTooMuch = dogs
.filter(dog => dog.curFood > dog.recFood)
.flatMap(dog => dog.owners);

//flat + map = flatMap
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recFood)
.flatMap(dog => dog.owners);

//flat + map = flatMap
console.log(ownersEatTooLittle);

//4 Log those name owner who have  dogs eat too much and too little
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5 Find dogs which eat a same like recFood
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6 Find the dog which eat cruFood(recFood> 0.9)  and cruFood(recFood < 1.1)
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1 
console.log(dogs.some(checkEatingOkay));

//7. log the dog eating ok
console.log(dogs.filter(checkEatingOkay));

//8 Sort recomment food in order 1,2,3
const dogsSort = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(dogsSort);