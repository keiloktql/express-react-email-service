const fs = require("fs");
const path = require("path");

module.exports.fsReadFileHtml = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, `/out/${fileName}`),
      "utf8",
      (error, htmlString) => {
        if (!error && htmlString) {
          resolve(htmlString);
        } else {
          reject(error);
        }
      }
    );
  });
};
