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
    <!-- ESSENCIAL para responsividade -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        color: #333;
        text-align: center;
        padding: 20px;
        margin: 0;
      }
      h1 {
        color: #0459af;
        font-size: 2em;
      }
      ul {
        list-style: none;
        padding: 0;
        max-width: 400px;
        margin: 0 auto;
      }
      li {
        margin: 10px 0;
      }
      a {
        text-decoration: none;
        color: #000000;
        font-weight: bold;
        font-size: 22px;
      }
      a:hover {
        color: #4b4b4b;
      }

      /* Responsividade para telas pequenas */
      @media (max-width: 600px) {
        h1 {
          font-size: 1.4em;
        }
        p {
          font-size: 0.9em;
        }
        a {
          display: block;
          padding: 10px;
          background: #c9c8c8;
          border-radius: 5px;
        }
        li {
          margin: 5px 0;
        }
      }
    </style>
  </head>
  <body>
    <h1>Bem-vindo ao meu primeiro projeto Express</h1>
    <p>Escolha um exercício abaixo:</p>
    <ul>
      <li><a href="/exA">Exercício Declaração A</a></li>
      <li><a href="/exB">Exercício Aritméticos B</a></li>
      <li><a href="/exC">Exercício Relacionais C</a></li>
      <li><a href="/exD">Exercício Lógicos D</a></li>
      <li><a href="/exE">Exercício If/Else E</a></li>
      <li><a href="/exF">Exercício Switch F</a></li>
      <li><a href="/exG">Exercício Repetição G</a></li>
      <li><a href="/exH">Exercício Vetor H</a></li>
    </ul>
    <br>
    <p>Por: Lucas Lopes Melania</p>
  </body>
</html>

  `);
});

app.get("/exA", (req, res) => {
  let declaracao = exercicioDeclaracao("Lucas", 16, "São Paulo");

  res.send(formatarResultado(declaracao));
});

app.get("/exB", (req, res) => {
  let resultado = exercicioAritimeticos(10, 10);
  res.send(formatarResultado(resultado));
});

app.get("/exC", (req, res) => {
  let resultado = operadoresRelacionais(10, 20);
  res.send(formatarResultado(resultado));
});

app.get("/exD", (req, res) => {
  let resultado = operadoresLogicos(16);
  res.send(formatarResultado(resultado));
});

app.get("/exE", (req, res) => {
  let resultado = estruturaIfElse(10);
  res.send(formatarResultado(resultado));
});

app.get("/exF", (req, res) => {
  let resultado = estruturaSwitch(7);
  res.send(formatarResultado(resultado));
});

app.get("/exG", (req, res) => {
  let resultado = estruturaRepeticao(24);
  res.send(formatarResultado(resultado));
});

app.get("/exH", (req, res) => {
  let resultado = vetor(0);
  res.send(formatarResultado(resultado));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
