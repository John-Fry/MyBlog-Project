# 📘 MyBlog

Uma plataforma simples de blog desenvolvida com ASP.NET Core e Vue 3, permitindo criar posts e adicionar comentários.

O projeto foi desenvolvido como parte de um desafio técnico, com foco em boas práticas de arquitetura, organização de código e uma experiência de usuário simples e clara.

---

# ✨ Funcionalidades

## 📝 Posts

- Listagem de posts
- Criação de novos posts
- Exibição de tempo relativo (ex: há 5 minutos)
- Estado vazio quando não existem posts

## 💬 Comentários

- Visualização de comentários de cada post
- Criação de novos comentários
- Avatar automático baseado no autor
- Estado vazio quando não existem comentários

---

# 🛠️ Tecnologias Utilizadas

## Backend

- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- Swagger

## Frontend

- Vue 3
- Vite
- TypeScript
- TailwindCSS

---

# 📂 Estrutura do Projeto

```
MyBlog-Project
│
├── backend
│   └── BlogAPI
│
├── frontend
│   └── My-Blog
│
└── README.md
```

A separação entre backend e frontend foi feita para manter uma arquitetura clara e facilitar manutenção e evolução do projeto.

---

# 🧠 Arquitetura do Backend

Controllers  
DTOs  
Models  
Data (DbContext)

Principais conceitos aplicados:

- DTO Pattern para evitar exposição direta das entidades
- Entity Framework Core para acesso ao banco
- SQLite para simplificar a execução do projeto
- Armazenamento de datas em UTC
- Endpoints REST bem definidos

---

# 🔗 Endpoints da API

<img width="1481" height="430" alt="image" src="https://github.com/user-attachments/assets/08ff3ae9-9030-48ac-b72d-c1d30cac901c" />

---

# 🎨 Arquitetura do Frontend
```
services
 ├ DTOs
 ├ models
 └ api
```
Fluxo de dados:

API → DTO → Model → Componentes Vue

Essa abordagem permite melhor controle sobre transformação de dados, desacoplamento entre API e interface e maior organização do código.

---

# 🚀 Como Executar o Projeto

Backend

`cd backend/BlogAPI`

`dotnet run`

A API estará disponível em:

https://localhost:7283

Swagger:

https://localhost:7283/swagger

Frontend

`cd frontend/My-Blog`

`npm install`

`npm run dev`

A aplicação estará disponível em:

http://localhost:5173

---

# 📸 Screenshots

<img width="2560" height="1440" alt="localhost_5173_" src="https://github.com/user-attachments/assets/86a9ff6f-6b3d-4601-91bd-1512cdbb2d9e" />
<img width="2560" height="1928" alt="localhost_5173_ (1)" src="https://github.com/user-attachments/assets/40be691f-e446-43d4-bc25-6b0a45bf22fd" />
<img width="2560" height="1928" alt="localhost_5173_ (2)" src="https://github.com/user-attachments/assets/86cfc175-d7b8-461a-afcb-d0294a1717be" />

---

# 👨‍💻 Autor

Desenvolvido por John Marques
