import { exercicioDeclaracao } from "./exA_declacao.js";
import { exercicioAritimeticos } from "./exB_aritmeticos.js";
import { operadoresRelacionais } from "./exC_relacionais.js";
import { operadoresLogicos } from "./exD_logicos.js";
import { estruturaIfElse } from "./exE_ifelse.js";
import { estruturaSwitch } from "./exF_switch.js";
import { estruturaRepeticao } from "./exG_repeticao.js";
import { vetor } from "./exH_vetor.js";
import { formatarResultado } from "./formatador.js";

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial;
          text-align: center;
          background: #f4f4f9;
        }
        a {
          display: block;
          margin: 10px;
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <h1>Projeto Express</h1>

      <!-- QUERY -->
      <h3>Usando QueryString</h3>
      <a href="/exA?nome=Lucas&idade=16&cidade=SP">Ex A</a>
      <a href="/exB2?n1=10&n2=20">Ex B</a>
      <a href="/exC2?n1=10&n2=20">Ex C</a>
      <a href="/exD2?idade=16">Ex D</a>
      <a href="/exE2?valor=10">Ex E</a>
      <a href="/exF2?dia=7">Ex F</a>
      <a href="/exG2?num=24">Ex G</a>
      <a href="/exH2?index=0">Ex H</a>

      <!-- PARAMS -->
      <h3>Usando Params</h3>
      <a href="/exA/Lucas/16/SP">Ex A</a>
      <a href="/exB/10/20">Ex B</a>
      <a href="/exC/10/20">Ex C</a>
      <a href="/exD/16">Ex D</a>
      <a href="/exE/10">Ex E</a>
      <a href="/exF/7">Ex F</a>
      <a href="/exG/24">Ex G</a>
      <a href="/exH/0">Ex H</a>

      <p>Por: Lucas Lopes Melania</p>
    </body>
    </html>
  `);
});

// 🔹 EX A (query)
app.get("/exA", (req, res) => {
  let { nome, idade, cidade } = req.query;
  let resultado = exercicioDeclaracao(nome, Number(idade), cidade);
  res.send(formatarResultado(resultado));
});

// 🔹 EX A (params) 👈 ADICIONADO
app.get("/exA/:nome/:idade/:cidade", (req, res) => {
  let { nome, idade, cidade } = req.params;
  let resultado = exercicioDeclaracao(nome, Number(idade), cidade);
  res.send(formatarResultado(resultado));
});

// 🔹 EX B
app.get("/exB/:n1/:n2", (req, res) => {
  let { n1, n2 } = req.params;
  let resultado = exercicioAritimeticos(Number(n1), Number(n2));
  res.send(formatarResultado(resultado));
});

app.get("/exB2", (req, res) => {
  let { n1, n2 } = req.query;
  let resultado = exercicioAritimeticos(Number(n1), Number(n2));
  res.send(formatarResultado(resultado));
});

// 🔹 EX C
app.get("/exC/:n1/:n2", (req, res) => {
  let { n1, n2 } = req.params;
  let resultado = operadoresRelacionais(Number(n1), Number(n2));
  res.send(formatarResultado(resultado));
});

app.get("/exC2", (req, res) => {
  let { n1, n2 } = req.query;
  let resultado = operadoresRelacionais(Number(n1), Number(n2));
  res.send(formatarResultado(resultado));
});

// 🔹 EX D
app.get("/exD/:idade", (req, res) => {
  let { idade } = req.params;
  let resultado = operadoresLogicos(Number(idade));
  res.send(formatarResultado(resultado));
});

app.get("/exD2", (req, res) => {
  let { idade } = req.query;
  let resultado = operadoresLogicos(Number(idade));
  res.send(formatarResultado(resultado));
});

// 🔹 EX E
app.get("/exE/:valor", (req, res) => {
  let { valor } = req.params;
  let resultado = estruturaIfElse(Number(valor));
  res.send(formatarResultado(resultado));
});

app.get("/exE2", (req, res) => {
  let { valor } = req.query;
  let resultado = estruturaIfElse(Number(valor));
  res.send(formatarResultado(resultado));
});

// 🔹 EX F
app.get("/exF/:dia", (req, res) => {
  let { dia } = req.params;
  let resultado = estruturaSwitch(Number(dia));
  res.send(formatarResultado(resultado));
});

app.get("/exF2", (req, res) => {
  let { dia } = req.query;
  let resultado = estruturaSwitch(Number(dia));
  res.send(formatarResultado(resultado));
});

// 🔹 EX G
app.get("/exG/:num", (req, res) => {
  let { num } = req.params;
  let resultado = estruturaRepeticao(Number(num));
  res.send(formatarResultado(resultado));
});

app.get("/exG2", (req, res) => {
  let { num } = req.query;
  let resultado = estruturaRepeticao(Number(num));
  res.send(formatarResultado(resultado));
});

// 🔹 EX H
app.get("/exH/:index", (req, res) => {
  let { index } = req.params;
  let resultado = vetor(Number(index));
  res.send(formatarResultado(resultado));
});

app.get("/exH2", (req, res) => {
  let { index } = req.query;
  let resultado = vetor(Number(index));
  res.send(formatarResultado(resultado));
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
