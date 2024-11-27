document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    Inputmask({
        mask: '999.999.999-99',
        placeholder: '_',
        clearMaskOnLostFocus: true
    }).mask(cpfInput);
});
