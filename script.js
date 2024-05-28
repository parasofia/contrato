function assinarContrato() {
    document.getElementById("downloadBtn").style.display = "block";
    alert("Contrato assinado com sucesso!");
}

function downloadPDF() {
    const contrato = document.querySelector('.contract');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [contrato.offsetWidth, contrato.offsetHeight]
    });
    
    pdf.text("Contrato de Amor Eterno", 20, 20);
    pdf.fromHTML(contrato, 20, 30);
    
    pdf.save("imagens/mensagem_sofia.pdf");
}

document.getElementById("downloadBtn").style.display = "none"; // Esconde o botão do PDF inicialmente

document.getElementById("assinarBtn").addEventListener("click", assinarContrato);
