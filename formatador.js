function formatarResultado(resultado) {
  return (
    "<!DOCTYPE html>" +
    "<html>" +
    "<head>" +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    "<style>" +
    "body { font-family: Arial; text-align: center; margin: 30px; padding: 20px; font-size: 24px; }" +
    "@media (max-width: 600px) {" +
    "body { font-size: 18px; margin: 15px; padding: 10px; }" +
    "}" +
    "</style>" +
    "</head>" +
    "<body>" +
    "<p>Resultado do exercício:</p>" +
    resultado +
    "</body>" +
    "</html>"
  );
}

export { formatarResultado };
