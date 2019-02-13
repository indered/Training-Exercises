var object1 = {
    name: "Yoyo",
    age: 21
};
var object2;

function objectCopy() {

    object2 = object1;
    console.log("Object 1: " + object1.name + " " + object1.age);
    console.log("Object 2: " + object2.name + " " + object2.age);
}