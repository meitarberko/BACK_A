const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hello, World!");
})

app.get("/movie", (req,res) => {
    res.send("star wars");
})

app.post("/movie", (req,res) => {
    res.send("star wars");
})

app.delete("/movie", (req,res) => {
    res.send("star wars");
})

app.put("/movie", (req,res) => {
    res.send("star wars");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})