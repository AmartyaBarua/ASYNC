// // copy file

var fs = require("fs");

fs.readFile("source_one.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("destination.txt", data, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully copied");
      }
    });
  }
});

// didn't copy

var fs = require("fs");

fs.readFileSync("source_one.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("destination.txt", data, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully coped from one");
      }
    });
  }
});

// combine two sources

fs.readFile("source_one.txt", function (err, data1) {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("source_two.txt", function (err, data2) {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile("destination.txt", data1 + data2, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("successful");
          }
        });
      }
    });
  }
});
