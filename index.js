import { exercicioDeclaracao } from "./exA_declacao.js";
import { exercicioAritimeticos } from "./exB_aritmeticos.js";
import { operadoresRelacionais } from "./exC_relacionais.js";
import { operadoresLogicos } from "./exD_logicos.js";
import { estruturaIfElse } from "./exE_ifelse.js";
import { estruturaSwitch } from "./exF_switch.js";
import { estruturaRepeticao } from "./exG_repeticao.js";
import { vetor } from "./exH_vetor.js";

import express from "express";

const app = express();

app.get("/exA", (req, res) => {
  let declaracao = exercicioDeclaracao("Lucas", 16, "São Paulo");

  res.send(declaracao);
});

app.get("/exB", (req, res) => {
  let resultado = exercicioAritimeticos(10, 10);
  res.send(resultado);
});

app.get("/exC", (req, res) => {
  let resultado = operadoresRelacionais(10, 20);
  res.send(resultado);
});

app.get("/exD", (req, res) => {
  let resultado = operadoresLogicos(16);
  res.send(resultado);
});

app.get("/exE", (req, res) => {
  let resultado = estruturaIfElse(10);
  res.send(resultado);
});

app.get("/exF", (req, res) => {
  let resultado = estruturaSwitch(7);
  res.send(resultado);
});

app.get("/exG", (req, res) => {
  let resultado = estruturaRepeticao(10);
  res.send(resultado);
});

app.get("/exH", (req, res) => {
  let resultado = vetor(0);
  res.send(resultado);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
