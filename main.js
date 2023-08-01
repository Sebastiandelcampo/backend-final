const express = require ('express')
const app = express();
const PORT = 8080
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.get("/", (req,rest) => {
    rest.send("Hello World");
})

app.get("/welcome", (req, rest) => {
    rest.send("Welcome");
})

app.get("*", (req, rest) => {
    rest.send("Page not found");
})

app.post("/api", (req, rest) => {
    rest.json({
        message: 'Post api'
    });
})

app.put("/api", (req, rest) => {
    rest.json({
        message: 'Put api'
    });
})

app.delete("/api", (req, rest) => {
    rest.json({
        message: 'Delete api'
    });
})

app.listen(PORT, () => {
    console.log('Server is running on port 8080');
})

