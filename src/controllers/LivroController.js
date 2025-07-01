
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

export default class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao listar livros`
      })
    }
  }

  static async listarLivro(req, res) {
    try {
      const id = req.params.id;
      const livroAchado = await livro.findById(id);
      res.status(200).json(livroAchado);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao encontrar o livro`
      })
    }
  }
  
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorAchado = await autor.findById(novoLivro.autor);
      const livroFull = {...novoLivro, autor: {...autorAchado._doc}};
      const livroCriado = await livro.create(livroFull);
      res.status(201).json({
        message: "Criado com sucesso",
        livro: novoLivro
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao cadastrar o livro`
      })
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Livro atualizado com sucesso"
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao atualizar o livro`
      })
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({
        message: "Livro deletado com sucesso"
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao deletar o livro`
      })
    }
  }

  static async listarLivroPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({editora: editora});
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao listar o livro por editora`
      })
    }
  }
}

