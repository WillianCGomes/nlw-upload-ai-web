import 'dotenv/config'
import { OpenAI } from 'openai'

// A chave da API precisa vir de dentro do arquivo .env
// Por padr�o, a vers�o utilizada do node n�o consegue ler vari�veis ambiente de forma nativa
// O dotenv serve para ler essas vari�veis ambiente
// Todas as vari�veis declaradas no arquivo .env s�o inseridas dentro da vari�vel global do node, process.env

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
})
