import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão:", erro )
});

conexao.once("open", () => {
  console.log("conexao com o banco feita com sucesso")
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = buscaId(req.params.id);
  livros.splice(index, 1);
  res.status(204).send("Livro removido com sucesso!")
});

export default app;
