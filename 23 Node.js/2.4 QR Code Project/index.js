/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "What do you want to embed in qr code?",
      name: "url"
    }
    
  ])
  .then((answers) => {
    let image = qr.image(answers.url);
    image.pipe(fs.createWriteStream('i_love_qr.png'));

    fs.writeFile("url.txt", answers.url,  (err) => {
      if(err)
          throw err
      console.log("File saved!")
  } )
  

  })
  .catch((error) => {
    console.log(error)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });