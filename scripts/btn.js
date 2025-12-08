const certificados = {
  "certificado-modulo1": "certificados/certificado-modulo1.pdf",
  "certificado-modulo2": "certificados/certificado-modulo2.pdf",
  "certificado-modulo3": "certificados/certificado-modulo3.pdf",
  "certificado-modulo4": "certificados/certificado-modulo4.pdf",
  "certificado-algoritmos": "certificados/certificado algoritmos.pdf",
  "curso-ia" : "certificados/curso-ia.pdf",
  "certificado-modulo5": "certificados/certificado-modulo5.pdf"
}

// Para cada id, adiciona o listener que abre o PDF
Object.keys(certificados).forEach(id => {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.addEventListener("click", () => {
      window.open(certificados[id], "_blank"); // abre em nova aba
    });
  }
});
