
const names = ["Guadalupe", "Ollie", "Aki"]


function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
           var str = `Thank you, ${names[i]}, for the ${event} gift.`
           var newArray = str.slice();
           
           console.log(newArray)
    }
   // newArray = newArray.push();
    return newArray
}
writeCards(names, "surprise")


function countDown(count) {
    for (let t = count; t >= 0; t--) {
        console.log(t)
    }
}
countDown(10);