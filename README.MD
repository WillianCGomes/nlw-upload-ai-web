
<h1 align="center" style="text-align: center;">
  upload.ai
</h1>

> Projeto desenvolvido na Trilha Mastery da NLW IA da Rocketseat.

<p align="center">
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<h2 id="project">📁 Projeto</h2>

O projeto consiste num gerador de descrições e títulos para vídeos do YouTube a partir da transcrição do conteúdo.



<h2 id="technologies">💻 Tecnologias</h2>

Este projeto foi desenvolvido utilizando tecnologias como:
- React
- TypeScript
- ESLint
- Tailwind CSS
- Axios
- Vite
- FFmpeg
- Radix UI
- PostCSS
- Node.js
- TypeScript
- Fastify
- Prisma
- Dotenv
- OpenAI
- Zod

<h2 id="usage">💡 Utilização</h2>

Para executar a aplicação em sua máquina localmente, certifique-se de ter o `Node.js` e o `npm` instalados antes de prosseguir com as etapas abaixo:

1. Após clonar o Projeto, acesse sua pasta:

```
$ cd upload-ai-api
```

2. Instale as dependências:

```
$ npm install
```

3. Execute as migrações:

```
$ npx prisma migrate dev
```

4. Inicie o servidor:

```
$ npm run dev
```
5. Abra um novo terminal e acesse o caminho do front-end:

```
$ cd upload-ai-web
```

6. Instale as dependências:

```
$ npm install
```

7. Inicie o servidor do front-end e acesse a aplicação através deste:

```
$ npm run dev
```

⚠️ **Importante**: Crie um arquivo .env de acordo com o arquivo .env.example. No campo DATABASE_URL, especifique a URL do banco de dados que deseja utilizar. Crie uma conta no site [OpenAI](https://openai.com/), obtenha sua chave da API e preencha o campo OPENAI_KEY com sua chave.

<h2 id="license">📝 Licença</h2>

Este projeto está sob a licença MIT.

---

Feito por Willian Carlos Gomes.
