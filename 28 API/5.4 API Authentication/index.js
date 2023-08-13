import express from "express";
import axios from "axios";

const app = express();
const port = 3002;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "holdup";
const yourPassword = "123456";
const yourAPIKey = "434864f1-6f89-4eca-b090-2bab69c931f3";
const yourBearerToken = "ad8b7b2d-04d5-4b89-a411-438d14538315";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  const response = await axios.get(API_URL + "random")
  res.render("index.ejs", { content: JSON.stringify(response.data) });


});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */


    const response = await axios.get(API_URL + "all", {      
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    })
    res.render("index.ejs", { content: JSON.stringify(response.data) });
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const response = await axios.get(API_URL + "filter", {      
    params: {
      score: 5,
      apiKey: yourAPIKey
    }
  })
  res.render("index.ejs", { content: JSON.stringify(response.data) });
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  const response = await axios.get(API_URL + "secrets/42", {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  })
  res.render("index.ejs", { content: JSON.stringify(response.data) });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
