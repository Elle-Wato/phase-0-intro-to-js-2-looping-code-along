// Code your solutions in this file

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts (gifts) {

//     for (let i = 3; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]}, and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// const thankYouCards = [];

// // function writeCards(array, event) {
// //     for(let i = 0; i < array.length; i++) {
// //         thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift`);
    
// //     }; return thankYouCards;
// // };



// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
// function writeCards(name, event) {
//     for(let i = 3; i < name.length; i++) {
//        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift`);
    
//     }; return thankYouCards;
// };
// function countDown(initialNumber) {
//     while (initialNumber >= 0) {
//         console.log (initialNumber);
//         initialNumber -= 1;
//     }
// }



// module.exports = { writeCards, countDown};

for (let age = 30; age < 40; age++) { 
    console.log(`I'm ${age} years old. Happy birthday to me!`); } 
    const gifts = ["teddy bear", "drone", "doll"]; 
    function wrapGifts(gifts) { 
        for (let i = 0; i < gifts.length; i++) { 
            console.log(`Wrapped ${gifts[i]} and added a bow!`); 
            debugger;
    } return gifts; }
     wrapGifts(gifts); 
     function writeCards(arr, event) {
    const newArr = [] 
    for (let i = 0; i < arr.length ; i++){
    newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    } return newArr; } 
    const countDown = num => { 
        while (num >= 0) {
    console.log(num) 
    num-- }
 }