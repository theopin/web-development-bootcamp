const citrus = [1, 2, 3, 4];

const fruits = [0, ...citrus, 5, 6, 7];

console.log(fruits);

const admin = {
  name: "John Doe",
  access: "4rudfuiwfhw"
};

const user = {
  ...admin,
  id: 1,
  username: "zenmaster"
};

const userOne = {
  admin,
  id: 1,
  username: "zenmaster"
};

console.log(user, userOne);

var key = "happy";
var obj = {};
obj[key] = 101;
obj["loss"] = 404;

console.log(obj);

// ES6 & Babel req
var obj2 = { [key]: 101 };
console.log(obj2);
