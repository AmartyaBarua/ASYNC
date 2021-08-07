// helps with avoiding too many callbacks

var promise = new Promise(function (resolve, reject) {
  var isTrue = true;
  if (isTrue) {
    resolve("Your status is active...");
  } else {
    reject("Your status is inactive...");
  }
});

promise
  .then(function (data) {
    console.log("then invoked");
    console.log(data);
  })
  .catch(function () {
    console.log("catch invoked");
    console.log(error);
  });

var fs = require("fs");
const { resolv } = require("path");

// arrow function for the above

var promise = new Promise((resolve, reject) => {
  fs.readFile("demo_one.txt", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

var promise2 = new Promise((resolve, reject) => {
  fs.readFile("demo_two.txt", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

promise
  .then((data) => {
    console.log(data.toString());
    promise2.then((data) => {
      console.log(data.toString());
    });
  })
  .catch((error) => console.log(error));
