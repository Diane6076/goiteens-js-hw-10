//1 for
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let ii = 0; ii < friends.length; ii += 1) {
    string += friends[ii];
    
    if (ii < friends.length - 1) {
        string += ", ";
    }
}
console.log(string);

//1.2 join

const friendsTwo = ["Mango", "Poly", "Kiwi", "Ajax"];
console.log(friendsTwo.join(", "));

//2
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

const CardToRemove = cards.splice(2, 1);

const CardToInsert = cards.splice(4, 0, "Карточка-6");
console.log(cards);