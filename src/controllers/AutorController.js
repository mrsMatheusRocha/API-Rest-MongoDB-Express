import { autor } from "../models/Autor.js";

export default class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao listar autores`
      })
    }
  }

  static async listarAutor(req, res) {
    try {
      const id = req.params.id;
      const autorAchado = await autor.findById(id);
      res.status(200).json(autorAchado);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao encontrar o autor`
      })
    }
  }
  
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: "Criado com sucesso",
        autor: novoAutor
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao cadastrar o autor`
      })
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Autor atualizado com sucesso"
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao atualizar o autor`
      })
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({
        message: "Autor deletado com sucesso"
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha ao deletar o autor`
      })
    }
  }
}

