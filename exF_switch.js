function estruturaSwitch(dia) {
  switch (dia) {
    case 1:
      return "Domingo";
      break;
    case 2:
      return "Segunda";
      break;
    case 3:
      return "Terça";
      break;
    case 4:
      return "Quarta";
      break;
    case 5:
      return "Quinta";
      break;
    case 6:
      return "Sexta";
      break;
    case 7:
      return "Sábado";
      break;
    default:
      return "Número inválido.";
  }
}

export { estruturaSwitch };
