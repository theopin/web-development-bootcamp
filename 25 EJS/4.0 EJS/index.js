import express from "express";

const app = express();
const port = 3000;

//body parser is incorporated in express, installation optional
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    let day = new Date().getDay()
    let weekType = "Weekday"
    let advice = "Work"
    if(day === 0 || day == 6) {
        weekType = "Weekend"
        advice = "Sleep"
    }

    res.render("test.ejs", {
        weekType,
        advice
    })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  