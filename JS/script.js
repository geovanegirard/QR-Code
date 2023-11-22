const enviaQr = document.querySelector('.gerador');

var qrImg = document.querySelector('.qrcode');

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

enviaQr.addEventListener("click",function(){
    gerarQRCode();

})

enviaQr.addEventListener("click", function(){
    enviaQr.innerHTML = "QR Code Gerado";
})

document.querySelector('.gerador').addEventListener("click", function(event){
    event.preventDefault()
});