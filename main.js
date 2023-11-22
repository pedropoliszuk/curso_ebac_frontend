document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('form-campos');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();


    const campoA = parseInt(document.getElementById('campo-a').value);
    const campoB = parseInt(document.getElementById('campo-b').value);

    if (campoB > campoA) {
        alert('Parabéns! O Formulário foi validado com sucesso.');
    } else {
        alert('Ops! O formulário não foi validado corretamente.');
    }
    });
});
