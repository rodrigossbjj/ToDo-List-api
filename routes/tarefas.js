const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../db/tarefas.json');

// Função utilitária para carregar e salvar
const carregarTarefas = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

const salvarTarefas = (tarefas) => {
    fs.writeFileSync(filePath, JSON.stringify(tarefas, null, 2));
};

// GET /tarefas
router.get('/', (req, res) => {
    try{
        const tarefas = carregarTarefas();
        res.json(tarefas);
    } catch (err){
        return [];
    }
});

// POST /tarefas
router.post('/', (req, res) => {
    const { nome } = req.body;

    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({ erro: 'Nome de tarefa é obrigatório.' });
    }


    const tarefas = carregarTarefas();
    const novaTarefa = {
        id: tarefas.length ? tarefas[tarefas.length - 1].id + 1 : 1,
        nome
    };

    tarefas.push(novaTarefa);
    salvarTarefas(tarefas);

    res.status(201).json(novaTarefa);
});

// PUT /produtos/:id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome } = req.body;

    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        return res.status(400).json({ erro: 'Nome de tarefa é obrigatório.' });
    }

    const tarefas = carregarTarefas();
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada.' });

    tarefa.nome = nome || tarefa.nome;

    salvarTarefas(tarefas);

    res.json(tarefas);
});

// DELETE /produtos/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  let tarefas = carregarTarefas();
  const existe = tarefas.some(t => t.id === id);

  if (!existe) return res.status(404).json({ erro: 'Tarefa não encontrado.' });

  tarefas = tarefas.filter(p => p.id !== id);
  salvarTarefas(tarefas);

  res.json({ mensagem: 'Tarefa removida com sucesso.' });
});

module.exports = router;
