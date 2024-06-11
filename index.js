import express from "express";
const app = express();
import cors from "cors";
import AuthorRoutes from "./routes/AuthorRoutes.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import BookRoutes from "./routes/BookRoutes.js";

const port = 3005;

var corsOptions = {
	origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/authors", AuthorRoutes);
app.use("/books", BookRoutes);
app.use("/auth", AuthRoutes);

app.listen(port, () => {
	console.log(`Lancement de l'API sur le port : ${port}`);
});
