import express from "express";

const app = express()
const PORT = 3000;


app.get("/", (req,res)=>{
  const today = new Date()
  const day = today.getDay()
  console.log(day);
  const context = {
    dayType: "a weekday",
    advice: "work hard"
  }

  if(day === 0 || day === 6){
    context.dayType = "the weekend"
    context.advice = "have fun"
  }

  res.render("index.ejs", context)
})

app.listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}`)
});