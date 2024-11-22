import express from "express";

const app = express()
const PORT = 3000;


app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
  res.render("index.ejs")
})


app.post("/submit", (req,res)=>{
  const name = {
    fName: req.body["fName"].length,
    lName: req.body["lName"].length
  }
  const nameLength = name.fName+ name.lName
  res.render("index.ejs", {nameLength})
})


app.get("/names", (req, res)=>{
  const names = ["ironman", "spider-man", "luffy"];
  res.render("names.ejs", {names})
})


app.listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}`)
});