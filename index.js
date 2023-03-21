
const names = ["Guadalupe", "Ollie", "Aki"]


function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
           var str = `"Thank you, ${names[i]}, for the wonderful ${event} gift!"`
           var newArray = [newArray, str.slice()];
    }
    return newArray;
}
console.log(writeCards(names, "surprise"));


function countDown(count) {
    for (let t = count; t >= 0; t--) {
        console.log(t)
    }
}
countDown(10);
