import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
/*


<%= variable %>
<% console.log("Hello") %> (output not rendered in tag)

<%- <h1>Hello </h1> %> shows html
<%% %%> allows escape chars (ie. <% or %>)

<%# comments %>
<%- include("<FILE NAME>") %> include particular ejs file
*/