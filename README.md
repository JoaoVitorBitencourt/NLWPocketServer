# Projeto NLW Pocket

Este projeto foi desenvolvido durante o curso **NLW Pocket** disponibilizado pela [RocketSeat](https://app.rocketseat.com.br/).

## Requisitos

- **Node.js**: Versão recomendada 20.17.0.
- **Banco de dados**: Utilize o Docker para criar uma instância do PostgreSQL ou configure um banco de dados PostgreSQL local.

## Configuração do Projeto

1. Clone o repositório e navegue até a pasta raiz do projeto.

2. Crie um arquivo `.env` na pasta raiz com a variável de ambiente `DATABASE_URL` contendo a URL de conexão com o banco de dados PostgreSQL. Exemplo:

DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco

## Passos para Execução

### 1. Instalar Dependências

```bash
npm install
```

### 2. Subir o Banco de Dados com Docker (opcional)
Caso utilize o Docker, rode o comando abaixo para iniciar o banco de dados:

```bash
docker-compose up -d
```

### 3. Executar Migrações do Banco de Dados

```bash
npx drizzle-kit migrate
```

### 4. (Opcional) Inserir Dados Iniciais
Se desejar adicionar dados iniciais ao banco, execute o seguinte comando:

```bash
npm run seed
```

### 5. Executar o projeto

```bash
npm run dev
```