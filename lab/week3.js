// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Read the "Musicessories" database into memory; write information
// about products and promotions to the JavaScript Console.
// - PART 1: Write out the number of products/promotions in the database, in a human-readable
//   format, to the JavaScript console, e.g. "There are x products."
// - PART 2: Write the name, description, and price of the first 3 products to the JavaScript
//   console – the name, description, and price should each be on its own line, and the
//   price should be formatted like "$5.49 each".
// - PART 3: Get a random promotion from the list of promotions. Display the description of the
//   promotion, along with the appropriate emoji.
//   - Discount = 🤑
//   - Shipping = 🚛
//   - Contest = 🏆

// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from products API endpoint
  let response = await fetch('https://kiei451.com/api/products.json')
  let data = await response.json()

  // writes the product data to the JavaScript console
  console.log(data)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // PART 1
  // Figure out how products there are, and store that number in memory
  let numProduct = data.products.length
  console.log(`${numProduct}`)

  // Figure out how promotions there are, and store that number in memory
  let numPromotions = data.promotions.length
  // Write the number of products to the JavaScript console
  console.log(`${numProduct}`)
  // Write the number of promotions to the JavaScript console
  console.log(`${numPromotions}`)
  
  // PART 2
  // Store the first product in memory
  let product1 = data.products[0]
  // Write the first product to the JavaScript console, on three separate lines
  console.log(product1)
  // Repeat for the 2nd and 3rd products
  // Store the second product in memory
  let product2 = data.products[1]
  // Write the product to the JavaScript console, on three separate lines
  console.log(product2)
  // Store the third product in memory
  let product3 = data.products[2]
  // Write the product to the JavaScript console, on three separate lines
  console.log(product3)
  
  // PART 3
  // Get a random integer between 1 and 10
  // Subtract one from that random integer because Arrays are zero-based
  let randNum = getRandomInt (10) -1 
  
  // Use the random integer to grab a promotion from the Array of promotions
  // and store it in memory
  let promo = data.promotions[randNum]

  // Figure out which emoji should be displayed, store it in memory
  if (promo.type == `discount`){
    console.log(`🤑: ${promo.description}`)
  } else if (promo.type == `shipping`){
    console.log(`🚛: ${promo.description}`)
  } else {
    console.log(`🏆: ${promo.description}`)
  }

  let emojiNew

  let emojilist = [`🤑`, `🚛`, `🏆`]
  if (promo.type == `discount`){
    emojiNew=emojilist[0]
  } else if (promo.type == `shipping`){
    emojiNew=emojilist[1]
  } else {
    emojiNew=emojilist[2]
  }

  // Create a sentence that displays the emoji along with the description 
  // of the promotion

  // Write the sentence to the JavaScript console
  console.log(`${promo.type}-${emojiNew}:${promo.description}`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
