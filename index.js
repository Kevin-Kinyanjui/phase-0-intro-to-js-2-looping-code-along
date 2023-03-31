
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
    }
    return messages;
  }
writeCards(names, "surprise");

function countDown(count) {
    for (let t = count; t >= 0; t--) {
        console.log(t)
    }
}
countDown(10);
