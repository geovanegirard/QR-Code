function gerarQRCode() {
    var enderecoInput = document.getElementById('endereco');
    var qrImg = document.getElementById('qrCodeImg');
    var enderecoValor = enderecoInput.value;

    if (enderecoValor.trim() !== '') {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(enderecoValor);
    } else {
        alert('Insira um URL válido.');
    }
}


document.querySelector('.gerador').addEventListener("click", function(event){
    event.preventDefault()
});