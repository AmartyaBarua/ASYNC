// synchronous

var fs = require("fs");

var data_one = fs.readFileSync("demo_one.txt");
console.log(data_one.toString());

var data_two = fs.readFileSync("demo_two.txt");
console.log(data_two.toString());

// asynchronous
var fs = require("fs");

var data_one = fs.readFile("demo_one.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

var data_two = fs.readFile("demo_two.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// async write
var fs = require("fs");

fs.writeFile("sample_one.txt", "Hello one", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});

fs.appendFile("sample_one.txt", "Hello two", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
