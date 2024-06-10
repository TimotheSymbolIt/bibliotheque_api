const express = require("express");
const app = express();
const AuthorRoutes = require("./routes/AuthorRoute");

const port = 3005;
app.use(express.json());

app.listen(port, () => {
	console.log(`Lancement de l'API sur le port : ${port}`);
});

app.use("/authors", AuthorRoutes);

app.get("/", (req, res) => {
	res.send("Hello World!");
});
