const { fruits, money } = require("./fruits");
const cowsay = require("cowsay");

fruits.forEach(fruit => {
  console.count(fruit);
});
console.log(money);

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U",
  })
);

