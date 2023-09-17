// (44.) Program to clone a JS Object ((Using spread <...>))
const food = {paneer: "@", milk : "cow"};
const cloneFood = {...food};
console.log(cloneFood);

// (44.) Program to clone a JS Object Using Object.assign({}, food)
const food1 = {onion_rings: "@", milk : "boffalo"};
const cloneFood1 = Object.assign({}, food1);
console.log(cloneFood1);

// (44.) Program to clone a JS Object using JSON.parse(JSON.stringify(food))
const food2 = {cheeze: "milk", peas : "plant"}
const cloneFood2 = JSON.parse(JSON.stringify(food2));
console.log(cloneFood2);