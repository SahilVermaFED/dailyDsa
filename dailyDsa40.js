// (40.) Program to create Objects in Different Ways

// i). Using new keyword/instance of an Object directly
// const objectName = new Object();
// --------------------------------------------------------------------------
// ii). Using Class.forName() method
// Tester tester2 = (Tester)Class.forName("Tester").newInstance();
// --------------------------------------------------------------------------
// iii). Using clone method.
// Tester tester3 = tester1.clone();
// --------------------------------------------------------------------------
// iv). Using Constructor.forName() method
// Tester tester4 = Tester.class.getConstructor().newInstance();
// --------------------------------------------------------------------------
// v). Using Deserialization
// ObjectInputStream objectInputStream = new ObjectInputStream(inputStream );
// Tester tester5 = (MyObject) objectInputStream.readObject();
// --------------------------------------------------------------------------

// (40.) [i]. Program to create JavaScript object using instance of an object / using new keyword
const person = new Object({
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function () {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(person); // full string
console.log(typeof person);
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);