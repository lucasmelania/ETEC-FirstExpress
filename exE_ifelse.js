function estruturaIfElse(nota) {
  if (nota >= 6) {
    re("Aprovado!");
  } else if (nota >= 4) {
    return "Recuperação.";
  } else {
    return "Reprovado.";
  }
}

export { estruturaIfElse };
