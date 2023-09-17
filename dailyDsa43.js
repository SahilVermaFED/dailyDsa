// (43.) Program to check if a key exists in an Object or not using (in Operator)
const person = {
    id: 1,
    name: "Don",
    age: 23,
}

const hasKey = "id" in person;

if (hasKey) {
    console.log('The key Exists.')
}
else {
    console.log("The key Doesn't Exists.")
}

// (43.) Program to check if a key exists in an Object or not using (in Operator)
const person2 = {
    id: 2,
    name: "Don",
    age: 25,
}

const hasKey2 = "age" in person;

(hasKey2) ? console.log("The key exists.")
          : console.log("The key doesnt exists")

// (43.) Program to check if a key exists in an objet using hasOwnProperty() method
const person3 = {
    id: 3,
    name: "shakira",
    age: "50",
}

const hasKey3 = person3.hasOwnProperty("mail");

(hasKey3) ? console.log("The key exists.")
    : console.log("The key doesn't exists")

// (43.) Program to check if a key exists in an objet using hasOwnProperty() method
const person4 = {
    id: 3,
    name: "shaakya",
    age: "22",
}

const hasKey4 = person3.hasOwnProperty("name");

if(hasKey4) {
    console.log("Yes, Exists..")
} else {
    console.log("No,Not exists..")
}