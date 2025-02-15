/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import 'fs';


let question = {type: "input", name: "URL", message: "Enter the URL: "}

inquirer
.prompt([question])
  .then((answers) => {
    fs.writefile('URL.txt', answers[URL])
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });