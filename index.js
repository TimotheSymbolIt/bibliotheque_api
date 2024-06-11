const express = require("express");
const app = express();
const cors = require("cors");
const AuthorRoutes = require("./routes/AuthorRoutes");
const BookRoutes = require("./routes/BookRoutes");
const AuthRoutes = require("./routes/AuthRoutes");

const port = 3005;

var corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/authors", AuthorRoutes);
app.use("/books", BookRoutes);
app.use("/auth", AuthRoutes);

app.listen(port, () => {
	console.log(`Lancement de l'API sur le port : ${port}`);
});
