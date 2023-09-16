// (45.) Program to Loop through an Object using ((for...in loop))
const student = {
    name: "Sam",
    age: "Pta nhi",
    hobbies: ["Idk", " It's Personal"],
}

for (let key in student) {
    let value = student[key];
    console.log(key + " - " + value);
}

//(45.) Program to Loop through an Object using Object.entries and for...of
const student3 = {
    name: "ni btaunga",
    age: "kya krna hai",
    hobbies: ["chl chl ave ni btata", " Get lost"],
}
for (let [key, value] of Object.entries(student3)) {
    console.log(key + " - " + value);

}

