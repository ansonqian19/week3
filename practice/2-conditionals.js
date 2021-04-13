// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice
// - Implement the (basic) rules of craps:


// Write the recipe (algorithm) in the comments. Write the code.

// roll the dices
let firstdie = getRandomInt (6)
console.log(`You got ${firstdie} in the first try`)

let seconddie = getRandomInt (6)
console.log(`You got ${seconddie} in the second try`)

let sum = firstdie + seconddie
console.log(`You got ${sum} in total`)

// decide who wins
if (sum==7 || sum==11) {
  //   - If the total of the two dice is 7 or 11, the player wins
  console.log(`the player wins!`)
} else if (sum == 2 || sum== 3 || sum == 12) {
  //   - If the total of the two dice is 2, 3, or 12, the player loses
  console.log(`the player loses!`)
}  else {
  //   - If the total is anything else, the "point" is set, e.g. "the point is 6"
  console.log(`the point is ${sum}`)
}
