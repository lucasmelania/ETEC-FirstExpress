function estruturaIfElse(nota) {
  if (nota >= 6) {
    return "Aprovado!";
  } else if (nota >= 4) {
    return "Recuperação.";
  } else {
    return "Reprovado.";
  }
}

export { estruturaIfElse };
