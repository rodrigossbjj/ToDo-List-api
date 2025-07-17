# 📝 ToDo List API

Uma API simples de gerenciamento de tarefas (ToDo List), construída com **Node.js** e **Express**, utilizando um arquivo `.json` como banco de dados local.

---

## 📁 Estrutura do Projeto

```
TODO-API/
│
├── db/                  # "Banco de dados" local (JSON)
│   └── tarefas.json
│
├── routes/              # Rotas da aplicação
│   └── tarefas.js
│
├── index.js             # Arquivo principal
├── package.json         # Configurações e dependências
├── teste.http           # Arquivo de testes HTTP para VSCode ou REST Client
```

---

## 🚀 Como Executar

### 1. Clone o repositório
```bash
git clone https://github.com/rodrigossbjj/ToDo-List-api.git
cd ToDo-List-api
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie a aplicação
```bash
node index.js
```

A API será iniciada em: `http://localhost:3000/`

---

## 🔄 Endpoints Disponíveis

### ✅ Listar tarefas
**GET** `/tarefas`  
Retorna todas as tarefas salvas.

### ➕ Criar uma nova tarefa
**POST** `/tarefas`  
**Body:**
```json
{
  "nome": "Estudar Node.js"
}
```

### ✏️ Atualizar uma tarefa
**PUT** `/tarefas/:id`  
**Body:**
```json
{
  "nome": "Estudar Express.js"
}
```

### ❌ Deletar uma tarefa
**DELETE** `/tarefas/:id`

---

## 💾 Banco de Dados

A API utiliza um arquivo local `db/tarefas.json` para armazenar as tarefas. Nenhum banco externo é necessário.

---

## 🧪 Testes Rápidos

Você pode usar o arquivo `teste.http` para testar os endpoints no VSCode com a extensão **REST Client**.

---

## 📌 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [REST Client (opcional)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

