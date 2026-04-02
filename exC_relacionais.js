function operadoresRelacionais(n1, n2) {
  if (n1 > n2) {
    return "O primeiro número é maior.";
  } else if (n1 < n2) {
    return "O segundo número é maior.";
  } else {
    return "Os números são iguais.";
  }
}

export { operadoresRelacionais };
