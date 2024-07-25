# BeTalent Challenge Frontend

🚀 Este projeto é a implementação de uma visualização de tabela para o teste técnico de front-end da BeTalent. A aplicação foi desenvolvida usando HTML, CSS e TypeScript, sem o uso de bibliotecas ou frameworks, utilizando Vite como bundler.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Desenvolvimento](#desenvolvimento)
- [Considerações Finais](#considerações-finais)
- [Contato](#contato)

## Sobre o Projeto

📊 A aplicação exibe uma tabela de funcionários com colunas de Foto, Nome, Cargo, Data de Admissão e Telefone. Possui uma funcionalidade de pesquisa para filtrar os dados e é totalmente responsiva, adaptando-se a diferentes tamanhos de tela.

## Pré-requisitos

🔧 Para rodar este projeto, você precisará ter instalado em sua máquina:

- [Node.js (versão 14 ou superior)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [json-server](https://github.com/typicode/json-server)

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Kaduh15/betalent-challenge-frontend.git
   ```
   
2. **Entre na pasta do projeto:**
   ```bash
   cd betalent-challenge-frontend
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure o ambiente:**
   Copie o arquivo `.env.example` para `.env` e ajuste as configurações necessárias, ou simplesmente renomeie o arquivo para `.env`.

5. **Inicie o json-server:**
   Em outro terminal, dentro da pasta do projeto, execute:
   ```bash
   json-server db.json
   ```
   Isso irá iniciar a API simulada com os dados necessários para a aplicação.

6. **Rode o comando de build:**
   ```bash
   npm run build
   ```

7. **Inicie a aplicação:**
   ```bash
   npm start
   ```

8. **Acesse a aplicação:**
   Abra seu navegador e vá para [http://localhost:5173](http://localhost:5173).

## Desenvolvimento

🛠️ Durante o desenvolvimento, o foco foi criar uma aplicação semântica e responsiva. No entanto, enfrentaram-se desafios como estilização com CSS puro, especialmente ao tentar usar tabelas para a visualização de dados, o que levou a mudar para outras tags HTML para uma melhor estilização e controle.

## Considerações Finais

🎉 Este projeto foi uma oportunidade desafiadora para explorar e desenvolver habilidades em HTML, CSS puro e TypeScript, sem o uso de frameworks ou bibliotecas adicionais, o que contribuiu significativamente para o aprendizado e crescimento profissional.

## Contato

📧 [GitHub](https://github.com/Kaduh15) | [LinkedIn](https://www.linkedin.com/in/carlos-eduardo-bernardino-da-silva)
